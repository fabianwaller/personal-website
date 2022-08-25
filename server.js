import express, { application } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { config } from 'dotenv';
config();
import { MongoClient } from "mongodb";

import { verifyCache, getArticles, createArticle } from './controllers/blog.js';
import { handleContact } from './controllers/contact.js';


//import { getTweets } from './controllers/twitter.js';

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



app.route('/api/articles').get(verifyCache, getArticles());
//app.route('/api/tweets').get(getTweets());
app.route('/api/contact').post(handleContact());


//app.route('/api/articles').post(createArticle(con));

// handle 404 - keep as last route 
router.route('*').get((req, res) => {
    res.status(404);
    return res.send({ error: '404 Not found' });
})


export async function connectCluster() {
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
        mongoClient = await connectCluster();
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
    console.log(`SERVER > nodejs server started on port ${port}`);
});