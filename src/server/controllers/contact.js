import Cluster from './cluster.js';
import { sendMail } from '../helpers/email.js'

export const handleContact = () => async (req, res) => {

    let cluster;
    try {
        cluster = new Cluster();
        let mongoClient = cluster.getMongoClient();
        const db = mongoClient.db('personal-website');
        const contact = db.collection('contact');

        const data = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }

        console.log(data);

        await contact.insertOne(data);
    } finally {
        cluster.disconnect();
    }

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAILLIST,
        subject: `web contact`,
        text: `${req.body.email}: ${req.body.message}`
    }

    //sendMail(mailOptions);

    return res.json('Message sent');
}