import Cluster from './cluster.js';
import { sendMail } from '../helpers/email.js'

export const handleContact = () => async (req, res) => {
    let cluster = new Cluster;
    const collection = cluster.getContactCollection();

    try {
        await saveAndSendContact(collection, req.body);
    } catch (err) {
        return res.status(400).json('Message not sent');
    } finally {
        cluster.disconnect();
    }
    return res.status(200).json('Message sent');
}

const saveAndSendContact = async (collection, body) => {
    const data = {
        name: body.name,
        email: body.email,
        message: body.message
    };

    if (data.name == null || data.email == null || data.message == null) {
        throw new Error('Missing required contact fields');
    }

    sendMail({
        from: data.name,
        to: process.env.MAILLIST,
        subject: `web contact`,
        text: `${data.email}: ${data.message}`
    });

    await collection.insertOne(data);
}

