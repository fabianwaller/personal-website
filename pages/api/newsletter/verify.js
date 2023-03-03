import Cluster from '../helpers/cluster.js';
import Collection from '../helpers/collection.js';
import addDaysToTimestamp from '../../../lib/dateHelper.js'

export default async function handleNewsletterVerification(req, res) {
    if (req.body.code == undefined) {
        return res.status(400).json('code is undefined');
    }
    const cluster = new Cluster();
    const newsletter = cluster.getCollection(Collection.newsletter);
    try {
        let code = parseInt(req.body.code);
        let found = await newsletter.find({'code': code}).toArray();

        if (found.length != 1) {
            return res.status(200).json('Sorry. Your verification code is invalid');
        }
        if (found[0].verified) {
            let expirationTimestamp = addDaysToTimestamp(found[0].signupDate.getTime(), 1);
            let registrationTimestamp = new Date().getTime();
            let expired = registrationTimestamp >= expirationTimestamp;
            if (expired) {
                return res.status(200).json('Sorry. Your verification link is expired');
            }
            return res.status(200).json('Sorry. You are already verified');
        }
        await newsletter.updateOne({'code': code}, {$set: {'verified': true}});
        return res.status(200).json('Successfully verified your email address. You now get new notifications directly in your inbox.');
    } catch (e) {
        console.log(e)
        return res.status(200).json('verification failed');
    } finally {
        cluster.disconnect();
    }
}