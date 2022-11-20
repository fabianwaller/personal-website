import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'
import Cluster from '../helpers/cluster.js';
import { sendMail } from '../helpers/email.js'
import handlebars from "handlebars";

import { ObjectId } from 'mongodb';

import { serveApp } from '../controllers/app.js';
import { Server } from 'http';
import Collection from '../helpers/collection.js';

export const handleNewsletterSignup = () => async (req, res) => {
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);

    if (req.body.email == undefined) {
        return res.status(400).send('email is undefined');
    }

    const data = {
        email: req.body.email,
        code: appendIntToInt(hashFromString(req.body.email), hashFromString(new Date().getTime().toString())),
        verified: false,
        signupDate: new Date()
    }

    try {
        let found = await newsletter.find({ 'email': data.email }).toArray();
        if (found.length > 0 && found[0].verified) {
            return res.status(400).json('Sorry. This email is already subscribed.');
        }
        if (found.length == 0) {
            let res = await newsletter.insertOne(data);
        } else if (found.length > 0 && !found[0].verified) {
            await newsletter.updateOne({ 'email': data.email }, { $set: data });
        }
        sendVerificationCodeToEmail(data.email, data.code);
        return res.status(200).json('Please check your inbox to verify your email.');
    } finally {
        cluster.disconnect();
    }
    return res.json('subscribed');
}

const sendVerificationCodeToEmail = async (email, code) => {
    const filePath = path.join(__dirname, '../assets/template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        verificationLink: process.env.SERVER + '/newsletter/verify?code=' + code,
        email: process.env.EMAIL
    };
    const htmlToSend = template(replacements);

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `Verify your email`,
        text: `please verify your newsletter subscription with the link below`,
        html: htmlToSend
    }

    sendMail(mailOptions);
}

export const handleNewsletterVerification = () => async (req, res) => {
    if (req.body.code == undefined) {
        return res.status(400).json('code is undefined');
    }
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);
    try {
        let code = parseInt(req.body.code);
        let found = await newsletter.find({ 'code': code }).toArray();

        if (found.length != 1) {
            return res.status(200).json('Sorry. Your verification code is invalid');
        }
        if (found[0].verified) {
            let expirationTimestamp = addDaysToTimestamp(found[0].signupDate.getTime(), 1);
            let registrationTimestamp = new Date().getTime();
            let expired = registrationTimestamp >= expirationTimestamp;
            if (expired) {
                return res.status(200).json('Sorry. Your verification link is expired');
            }
            return res.status(200).json('Sorry. You are already verified');
        }
        await newsletter.updateOne({ 'code': code }, { $set: { 'verified': true } });
        return res.status(200).json('Successfully verified your email address. You now get new notifications directly in your inbox.');
    } catch (e) {
        return res.status(200).json('verification failed');
    } finally {
        cluster.disconnect();
    }
}

export const sendNewsletter = async (article) => {
    try {
        const cluster = new Cluster();
        const newsletter = cluster.getCollection(Collection.newsletter);
        let subscribers = await newsletter.find({ 'verified': true }).toArray();
        subscribers.forEach((subscriber) => {
            let id = subscriber._id;
            let footer = '<br><a href="' + process.env.CLIENT + '/newsletter/unsubscribe?id=' + id + '" style="margin: 0 auto; text-decoration: none;">unsubscribe</a>';
            const mailOptions = {
                from: process.env.EMAIL,
                to: subscriber.email,
                subject: article.title,
                html: article.html + footer
            }
            sendMail(mailOptions);
        });
        console.log('Successfully sent newsletter');
    } catch (e) {
        console.log(e)
    }
}

export const handleNewsletterUnsubscription = () => async (req, res) => {
    const id = req.body.id;
    const invalidLinkMsg = 'Sorry. Your unsubscription link is invalid.';
    if (id == undefined) {
        return res.status(400).json(invalidLinkMsg);
    }
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);
    try {
        let result = await newsletter.deleteOne({ '_id': new ObjectId(id) });
        if (result.deletedCount == 0) {
            return res.status(200).json(invalidLinkMsg);
        }
        return res.status(200).json('Successfully unsubscribed from newsletter');
    } catch (err) {
        return res.status(200).json('unsubscription failed');
    }
}

const addDaysToTimestamp = (timestamp, days) => {
    return timestamp + (days * 24 * 60 * 60 * 1000);
}

const hashFromString = (str) => {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // convert to 32 bit integer
    }
    return hash;
}

const appendIntToInt = (int1, int2) => {
    return parseInt(int1.toString() + int2.toString());
}