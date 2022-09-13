import Cluster from './cluster.js';
import { sendMail } from '../helpers/email.js'

export const handleContact = () => async (req, res) => {

    let mongoClient;
    try {
        insertContact(mongoClient);
    } finally {
        disconnectCluster(mongoClient);
    }

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAILLIST,
        subject: `${req.body.subject}`,
        text: `${req.body.email}: ${req.body.message}`
    }

    sendMail(mailOptions);

    return res.json('Message sent');
}

const insertContact = async (mongoClient) => {
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
}