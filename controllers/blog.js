import { connectCluster } from '../server.js';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 });

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


/* export const getArticles = (con) => (req, res) => {
    //console.log(req.query.categorie);
    let sql = "SELECT * FROM blog ";
    if (req.query.title != null) {
        sql += "WHERE title LIKE '%" + req.query.title + "%'";
    }
    if (req.query.categorie != null) {
        if (req.query.title != null) {
            sql += " and ";
        } else {
            sql += "WHERE "
        }
        //sql += "categorie='" + req.query.categorie + "'";
        sql += "categorie in (" + req.query.categorie + ")"
    }
    if (req.query.slug != null) {
        //console.log(req.query.slug);
        sql = "SELECT * FROM blog WHERE slug='" + req.query.slug + "'";
    }
    //console.log(sql);

    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}



export const createArticle = (con) => (req, res) => {
    let sqlreadycontent = req.body.content.replace(/'/g, "''").replace(/"/g, '\\"');
    let sql = 'INSERT INTO blog (categorie, title, imageurl, slug, text, content) VALUES ("' + req.body.categorie + '" , "' + req.body.title + '", "' + req.body.imageurl + '" , "' + req.body.slug + '" , "' + req.body.text + '", "' + sqlreadycontent + '")'

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log('blog article "' + req.body.title + '" created');
    });

    res.json('article posted');
} */

/* module.exports = {
    getArticles,
    createArticle
} */