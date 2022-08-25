import nodemailer from 'nodemailer';

import { connectCluster } from '../server.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD
    }
})

export const handleContact = () => async (req, res) => {

    let mongoClient;
    try {
        mongoClient = await connectCluster();
        const db = mongoClient.db('personal-website');
        const contact = db.collection('contact');

        const data = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }

        await contact.insertOne(data);

    } finally {
        await mongoClient.close();
    }

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAILLIST,
        subject: `${req.body.subject}`,
        text: `${req.body.email}: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.log(error);
        } else {
            console.log('email sent: ' + info.response);
        }
    });

    return res.json('Message sent');
}