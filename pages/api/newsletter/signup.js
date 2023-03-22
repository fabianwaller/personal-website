import fs from 'fs'
import path from 'path';
import Cluster from '../helpers/cluster.js';
import sendMail from '../helpers/email.js'
import handlebars from 'handlebars';
import Collection from '../helpers/collection.js';
import getVerificationCode from '../../../lib/verificationCode.js';
import {isEmail} from '../../../lib/formHelper.js';


export default async function handleNewsletterSignup(req, res) {
    const cluster = new Cluster();
    await cluster.connect();
    const newsletter = cluster.getCollection(Collection.newsletter);

    if (!isEmail(req.body.email)) {
        return res.status(400).json('invalid email address')
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
        sendVerificationLinkToEmail(data.email, verificationLink);
        return res.status(200).json('Please check your inbox to verify your email.');
    } finally {
        await cluster.disconnect();
    }
}

const sendVerificationLinkToEmail = async (email, link) => {
    const filePath = path.join(process.cwd(), 'public', 'template.html')
    const fileContents = fs.readFileSync(filePath, 'utf8').toString()

    const template = handlebars.compile(fileContents);
    const replacements = {
        verificationLink: link,
        email: process.env.EMAIL
    };
    const htmlToSend = template(replacements);

    await sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: `Verify your email`,
        text: `please verify your newsletter subscription with the link below`,
        html: htmlToSend
    });
}