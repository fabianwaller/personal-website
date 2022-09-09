import { connectCluster } from './cluster.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 });

export const verifyCache = (req, res, next) => {
    try {
        let slug = req.query.slug;
        if (slug == null) {
            slug = 'all';
        }
        if (cache.has(slug)) {
            return res.status(200).json(cache.get(slug));
        }
        return next();
    } catch (err) {
        throw new Error(err);
    }
}

export const getArticles = () => async (req, res) => {
    let mongoClient;
    try {
        mongoClient = await connectCluster();
        const db = mongoClient.db('personal-website');
        const collection = db.collection('blog');
        let slug = req.query.slug;
        let data;
        if (slug == null) {
            slug = 'all';
            data = await collection.find().toArray();
        } else {
            slug = req.query.slug;
            data = await collection.find({ 'slug': slug }).toArray();
        }
        cache.set(slug, data);
        return res.status(200).json(data);
    } finally {
        await mongoClient.close();
    }
}

export async function createArticle(collection) {
    const data = {
        title: 'Momo',
        slug: 'momo',
        categorie: '',
        imageurl: '',
        date: new Date(),
        text: "",
        content: ``
    }

    await collection.insertOne(data);

    console.log("created article");
}