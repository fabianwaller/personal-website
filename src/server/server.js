import express, { application } from 'express';
import { verifyCache, getArticles, createArticle } from './controllers/blog.js';
import { handleContact } from './controllers/contact.js';
import { handleNewsletterSignup, handleNewsletterVerification } from './controllers/newsletter.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { config } from 'dotenv';
import { Server } from 'http';
config();

const prefix = 'BACKEND > ';

const app = express();
const router = express.Router();

app.use(express.static("dist/client"));
app.use(express.json());

export const serveIndexHtml = () => async (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/client/index.html'))
}

const serveCdnContent = () => async (req, res) => {
    res.sendFile(path.join(__dirname, '../../cdn/' + req.params.content))
}


app.route('/api/articles').get(verifyCache, getArticles());
app.route('/api/contact').post(handleContact());

app.route('/api/newsletter/signup').post(handleNewsletterSignup());
app.route('/api/newsletter/verify').post(handleNewsletterVerification());


app.route("/cdn/:content").get(serveCdnContent());
app.route("*").get(serveIndexHtml());

// api/newsletter/verify?code=6434d86b16bb956ac463ef0786129488

// handle 404 - keep as last route 
router.route('*').get((req, res) => {
    res.status(404);
    return res.send({ error: '404 Not found' });
})

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log(`SERVER > nodejs server started on port ${port}`);
});