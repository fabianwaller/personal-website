import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'
import Cluster from '../helpers/cluster.js';
import {sendMail} from '../helpers/email.js'
import handlebars from 'handlebars';

import {ObjectId} from 'mongodb';

import Collection from '../helpers/collection.js';


export default async function handleNewsletterSignup(req, res) {
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
        let found = await newsletter.find({'email': data.email}).toArray();
        if (found.length > 0 && found[0].verified) {
            return res.status(400).json('Sorry. This email is already subscribed.');
        }
        if (found.length == 0) {
            let res = await newsletter.insertOne(data);
        } else if (found.length > 0 && !found[0].verified) {
            await newsletter.updateOne({'email': data.email}, {$set: data});
        }
        sendVerificationCodeToEmail(data.email, data.code);
        return res.status(200).json('Please check your inbox to verify your email.');
    } finally {
        cluster.disconnect();
    }
    return res.json('subscribed');
}

const sendVerificationCodeToEmail = async (email, code) => {
    const filePath = path.join(__dirname, './template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        verificationLink: process.env.SERVER + '/newsletter/verify?code=' + code,
        email: process.env.EMAIL
    };
    console.log(replacements.verificationLink)
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