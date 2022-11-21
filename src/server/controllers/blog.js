import Cluster from '../helpers/cluster.js';
import NodeCache from 'node-cache';
import Collection from '../helpers/collection.js';
import mongoose from 'mongoose';

import showdown from 'showdown';
import slugify from 'slugify';

import * as fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { sendNewsletter } from './newsletter.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cache = new NodeCache({ stdTTL: 600 });

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
    let slug = req.query.slug;
    if (slug == null) {
        slug = 'all';
    }
    let data = await findArticles(slug)
    return res.status(200).json(data);
}

export const findArticles = async (slug) => {
    try {
        const cluster = new Cluster();
        const blog = cluster.getCollection(Collection.blog);


        let data;
        if (slug == 'all') {
            data = await blog.find({}).toArray();
        } else {
            data = await blog.find({ 'slug': slug }).toArray();
        }
        cache.set(slug, data);
        return data;


    } catch (e) {
        console.log(e)
    }


}

export const createArticle = () => async (req, res) => {
    try {
        const cluster = new Cluster();
        const blog = cluster.getCollection(Collection.blog);

        let markdownConverter = new showdown.Converter();

        let article = {
            title: req.body.title,
            slug: slugify(req.body.title, { lower: true, strict: true }),
            createdAt: new Date(),
            editedAt: new Date(),
            description: req.body.description,
            markdown: req.body.markdown,
            html: await markdownConverter.makeHtml(req.body.markdown)
        }

        await blog.insertOne(article);
        await sendNewsletter(article);

        return res.status(200).json("created article");
    } catch (e) {
        console.log(e)
    }
}

export const deleteArticle = () => async (req, res) => {
    try {
        const cluster = new Cluster();
        const blog = cluster.getCollection(Collection.blog);

        let result = await blog.deleteOne({ 'slug': req.body.slug });
        if (result.deletedCount == 0) {
            return res.status(400).json('article deletion failed');
        }
        return res.status(200).json('deleted article ' + req.body.slug);

    } catch (e) {
        console.log(e)
    }
}