import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'
import Cluster from './cluster.js';
import { sendMail } from '../helpers/email.js'
import handlebars from "handlebars";

import { serveIndexHtml } from '../server.js';
import { Server } from 'http';

export const handleNewsletterSignup = () => async (req, res) => {
    let cluster = new Cluster();
    let mongoClient = cluster.getMongoClient();
    const db = mongoClient.db('personal-website');
    const newsletter = db.collection('newsletter');

    let hashCode = appendIntToInt(hashFromString(req.body.email), hashFromString(new Date().getTime().toString()))
    const data = {
        email: req.body.email,
        verificationCode: hashCode,
        verified: false,
        signupDate: new Date()
    }

    try {
        let found = await newsletter.find({ 'email': data.email }).toArray();
        if (found.length == 0) {
            await newsletter.insertOne(data);
            sendVerificationCodeToEmail(data.email, data.verificationCode);
            return res.status(200).json('Successfully signed up. Please check your inbox to verify your email.');
        } else if (found.length > 0 && !found[0].verified) {
            await newsletter.updateOne({ 'email': data.email }, { $set: data });
            sendVerificationCodeToEmail(data.email, data.verificationCode);
            return res.status(200).json('Please check your inbox to verify your email.');
        } else if (found.length > 0 && found[0].verified) {
            return res.status(200).json('Sorry. This email is already subscribed.');
        }
    } finally {
        cluster.disconnect();
    }
    return res.json('subscribed');
}

const sendVerificationCodeToEmail = async (email, hashCode) => {
    const filePath = path.join(__dirname, 'template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        verificationCode: hashCode
    };
    const htmlToSend = template(replacements);

    const mailOptions = {
        from: 'fabian080603@gmail.com',
        to: email,
        subject: `Verify your email`,
        text: `please verify your newsletter subscription with the link below`,
        html: htmlToSend
    }

    sendMail(mailOptions);
}

export const handleNewsletterVerification = () => async (req, res) => {
    let cluster = new Cluster();
    let mongoClient = cluster.getMongoClient();
    try {
        const db = mongoClient.db('personal-website');
        const newsletter = db.collection('newsletter');
        let code = parseInt(req.body.code);
        let found = await newsletter.find({ 'verificationCode': code }).toArray();
        if (found.length == 1 && found[0].verified == false) {
            let expirationTimestamp = addDaysToTimestamp(found[0].signupDate.getTime(), 1);
            let registrationTimestamp = new Date().getTime();
            if (registrationTimestamp < expirationTimestamp) {
                await newsletter.updateOne({ 'verificationCode': code }, { $set: { 'verified': true } });
                res.status(200).json('Successfully verified your email address. You now get new notifications directly in your inbox.');
            } else {
                res.status(200).json('your verification link is expired');
            }
        } else if (found.length == 1 && found[0].verified == true) {
            res.status(200).json('your are already verified');
        } else {
            res.status(200).json('your verification code is invalid');
        }

    } finally {
        cluster.disconnect();
    }
}

const addMinutesToTimestamp = (timestamp, minutes) => {
    return timestamp + (minutes * 60 * 1000);
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