import Cluster from '../helpers/cluster.js';
import { sendMail } from '../helpers/email.js'
import Collection from '../helpers/collection.js';

export const handleContact = () => async (req, res) => {
    let cluster = new Cluster;
    const collection = cluster.getCollection(Collection.contact)

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
        message: body.message,
        date: new Date()
    };

    if (data.name == null || data.email == null || data.message == null) {
        throw new Error('Missing required contact fields');
    }

    sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `web contact`,
        text: `${data.email}: ${data.message}`
    });

    await collection.insertOne(data);
}