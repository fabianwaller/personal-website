import express, { application } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { config } from 'dotenv';
config();
//import mysql from 'mysql2';
import { MongoClient } from "mongodb";
//import request from 'request';
//import jwt from 'express-jwt';
//import jwks from 'jwks-rsa';

import nodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 60 });
// each properaty that remains in the cache will have a lifetime of 60 seconds.

import { getArticles, createArticle } from './controllers/blog.js';
import { handleContact } from './controllers/contact.js';
import NodeCache from 'node-cache';
//import { getTweets } from './controllers/twitter.js';

/* const { getArticles, createArticle } = require('./controllers/blog');
const { handleContact } = require('./controllers/contact');
const { getTweets } = require('./controllers/twitter'); */
/* 
const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: 3306,
    ssl: false
}); */

/* var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-qyqv5sl1.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'www.fabianwaller.de/api',
    issuer: 'https://dev-qyqv5sl1.eu.auth0.com/',
    algorithms: ['RS256']
}); */


/* var options = {
    method: 'POST',
    url: 'https://dev-qyqv5sl1.eu.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"5pLdElBfLyBMtqA5sc1uglP1HBufq94L","client_secret":"NOBZRU8Clc5fodu_f3K5gki8a-3aJp6qW15QTD80M2cxlT8yhkXiPI9V4VoR4Fop","audience":"www.fabianwaller.de/api","grant_type":"client_credentials"}'
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    // https://manage.auth0.com/dashboard/eu/dev-qyqv5sl1/apis/62535732e1f1620040133389/test
    // log bearer token response
    //console.log(body);

}); */

const verifyCache = (req, res, next) => {
    try {
        //const { id } = req.params;
        const id = 1;
        if (cache.has(id)) {
            return res.status(200).json(cache.get(id));
        }
        return next();
    } catch (err) {
        throw new Error(err);
    }
}

const prefix = 'DATABASE > ';

const app = express();
const router = express.Router();

app.use(express.static("dist"));
app.use(express.static("dist/client"));
app.use(express.static("dist/client/assets"));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/client/index.html'))
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/client/index.html'))
});

app.get("/blog/*", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/client/index.html'))
});

app.get("/cdn/:content", (req, res) => {
    res.sendFile(path.join(__dirname, '/cdn/' + req.params.content))
});

app.get('/api/hello', async (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.get('/api/articles', verifyCache, async (req, res) => {
    let mongoClient;
    try {
        //const { id } = req.params;
        mongoClient = await connect();
        const db = mongoClient.db('personal-website');
        const collection = db.collection('blog');
        const data = await getArticles(collection);
        const id = 1;
        cache.set(id, data);
        res.status(200).json(data);
    } finally {
        await mongoClient.close();
    }
});
//app.route('/api/tweets').get(getTweets());

app.route('/api/contact').post(handleContact());

//app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});


//app.route('/api/articles').post(createArticle(con));

// handle 404 - keep as last route 
router.route('*').get((req, res) => {
    res.status(404);
    return res.send({ error: '404 Not found' });
})


export async function connect() {
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        //console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        //console.log('Successfully connected to MongoDB Atlas!');
        return mongoClient;
    } catch (err) {
        console.log('Connection to MongoDB Atlas failed', err);
        process.exit();
    }
}

export async function runClusterExample() {
    let mongoClient;
    try {
        mongoClient = await connect();
        const db = mongoClient.db('personal-website');
        const collection = db.collection('blog');

        //await createArticle(collection);

        //console.log(await getArticles(collection));

    } finally {
        await mongoClient.close();
    }
}

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    //runClusterExample();

    /*     con.query("CREATE TABLE IF NOT EXISTS contact (name VARCHAR(255), email VARCHAR(255), subject VARCHAR(255), message TEXT, time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)", (err, result) => {
            console.log(prefix + "contact table loaded");
        }); */

    console.log(`SERVER > nodejs server started on port ${port}`);
});