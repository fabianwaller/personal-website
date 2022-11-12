import Cluster from './cluster.js';
import NodeCache from 'node-cache';
import Article from '../models/article.js';
import mongoose from 'mongoose';

import * as fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//import { readFile } from 'fs'

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
    let slug = req.query.slug;
    if (slug == null) {
        slug = 'all';
    }
    let data = await findArticles(slug)
    return res.status(200).json(data);
}

export const findArticles = async (slug) => {
    mongoose.connect(process.env.MONGOOSE_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    let data;
    if (slug == 'all') {
        data = await Article.find({});
    } else {
        data = await Article.find({ 'slug': slug });
    }
    cache.set(slug, data);
    return data;
}

export const createArticle = () => async (req, res) => {
    mongoose.connect(process.env.DB_URI + "/personal-website",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    let article = new Article(req.body);

    let validationError = article.validateSync();
    if (validationError) {
        return res.status(400).json(validationError);
    }
    let savingError = await article.save();
    if (savingError) {
        return res.status(400).json(savingError);
    }

    return res.status(200).json("created article");
}

export const deleteArticle = () => async (req, res) => {
    mongoose.connect(process.env.DB_URI + "/personal-website",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    let result = await Article.deleteOne({ 'slug': req.body.slug });
    if (result.deletedCount == 0) {
        return res.status(400).json('article deletion failed');
    }
    return res.status(200).json('deleted article ' + req.body.slug);
}