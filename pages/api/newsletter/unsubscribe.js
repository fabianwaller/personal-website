import Cluster from '../helpers/cluster.js';
import Collection from '../helpers/collection.js';
import {ObjectId} from 'mongodb';

export default async function handleNewsletterUnsubscription(req, res) {
    const id = req.body.id;
    const invalidLinkMsg = 'Sorry. Your unsubscription link is invalid.';
    if (id == undefined) {
        return res.status(400).json(invalidLinkMsg);
    }
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);
    try {
        let result = await newsletter.deleteOne({'_id': new ObjectId(id)});
        if (result.deletedCount == 0) {
            return res.status(200).json(invalidLinkMsg);
        }
        return res.status(200).json('Successfully unsubscribed from newsletter');
    } catch (err) {
        console.log(err)
        return res.status(200).json('unsubscription failed');
    }
}