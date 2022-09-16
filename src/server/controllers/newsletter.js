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

export const handleNewsletter = () => async (req, res) => {
    let cluster = new Cluster();
    let mongoClient = cluster.getMongoClient();
    try {

        const data = {
            email: req.body.email,
            verificationCode: hashFromString(req.body.email),
            verified: false,
            signupDate: new Date()
        }

        const db = mongoClient.db('personal-website');
        const newsletter = db.collection('newsletter');

        let found = await newsletter.find({ 'email': req.body.email }).toArray();
        if (found.length == 0) {
            await newsletter.insertOne(data);
        } else if (found.length > 0 && found[0].verified) {
            return res.status(200).json('Sorry. This email is already subscribed.');
        }
        sendVerificationEmail(req.body.email);
        return res.status(200).json('Successfully signed up. Please check your inbox to verify your email.');

    } finally {
        cluster.disconnect();
    }
    return res.json('subscribed');
}

const sendVerificationEmail = async (email) => {
    const filePath = path.join(__dirname, 'template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        verificationCode: hashFromString(email)
    };
    const htmlToSend = template(replacements);

    const mailOptions = {
        from: 'fabian.wallerr@gmail.com',
        to: email,
        subject: `Verify your email`,
        text: `please verify your newsletter subscription with the link below`,
        html: htmlToSend
    }

    sendMail(mailOptions);
}

export const serveNewsletterVerification = () => async (req, res) => {

    res.sendFile(path.join(__dirname, '../../../dist/client/index.html'))

    /*     let cluster = new Cluster();
        let mongoClient = cluster.getMongoClient();
        try {
            const db = mongoClient.db('personal-website');
            const newsletter = db.collection('newsletter');
    
            let code = parseInt(req.query.code);
            let found = await newsletter.find({ 'verificationCode': code }).toArray();
            if (found.length == 1 && found[0].verified == false) {
                await newsletter.updateOne({ 'verificationCode': code }, { $set: { 'verified': true } });
                res.status(200).sendFile(path.join(__dirname, '../../../dist/client/newsletter/index.html'));
            } else {
                res.status(200).json('your verification code is invalid');
            }
    
        } finally {
            cluster.disconnect();
        } */
}




// todo include signupDate in hash
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