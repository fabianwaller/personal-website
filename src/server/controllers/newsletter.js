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
        if (found.length > 0 && found[0].verified) {
            return res.status(200).json('you are already subscribed');
        }
        await newsletter.insertOne(data);
        sendVerificationEmail(req.body.email);
        return res.status(200).json('subscribed. please check your inbox');

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
    console.log(req.query);


    return res.send({ hash: hashFromString('fabian.wallerr@gmail.com') });
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