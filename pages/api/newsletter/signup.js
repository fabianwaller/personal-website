import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'
import path from 'path';
import Cluster from '../helpers/cluster.js';
import {sendMail} from '../helpers/email.js'
import handlebars from 'handlebars';
import Collection from '../helpers/collection.js';
import getVerificationCode from '../../../lib/verificationCode.js';


export default async function handleNewsletterSignup(req, res) {
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);

    if (req.body.email == undefined) {
        return res.status(400).send('email is undefined');
    }

    const data = {
        email: req.body.email,
        code: getVerificationCode(req.body.email),
        verified: false,
        signupDate: new Date()
    }

    try {
        let found = await newsletter.find({'email': data.email}).toArray();
        if (found.length > 0 && found[0].verified) {
            return res.status(400).json('Sorry. This email is already subscribed.');
        }
        if (found.length == 0) {
            await newsletter.insertOne(data);
        } else if (found.length > 0 && !found[0].verified) {
            await newsletter.updateOne({'email': data.email}, {$set: data});
        }
        const verificationLink = 'http://' + req.headers.host + '/newsletter/verify?code=' + data.code;
        console.log(verificationLink)
        sendVerificationLinkToEmail(data.email, verificationLink);
        return res.status(200).json('Please check your inbox to verify your email.');
    } finally {
        cluster.disconnect();
    }
}

const sendVerificationLinkToEmail = async (email, link) => {
    const filePath = path.resolve('./public', 'template.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        verificationLink: link,
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