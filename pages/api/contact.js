import Cluster from './helpers/cluster.js';
import sendMail from './helpers/email.js'
import Collection from './helpers/collection.js';

export default async function handleContact(req, res) {
    let cluster = new Cluster;
    const collection = cluster.getCollection(Collection.contact)

    try {
        await saveAndSendContact(collection, req.body);
    } catch (err) {
        return res.status(400).json('Your message could not be sent. Please try again later.');
    } finally {
        cluster.disconnect();
    }
    return res.status(200).json('Your message has been sent.');
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
        subject: `${data.email} web contact`,
        text: data.message
    });

    await collection.insertOne(data);
}