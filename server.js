const express = require('express');
const fs = require('fs');
const path = require('path');
const doetnv = require('dotenv').config();
const mysql = require('mysql')

const { getArticles, createArticle } = require('./controllers/blog');
const { handleContact } = require('./controllers/contact');
const { getTweets } = require('./controllers/twitter');

const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: 3306,
    ssl: false
});

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

app.get('/api/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});


app.route('/api/articles').get(getArticles(con, null)).post(createArticle(con));
app.route('/api/contact').post(handleContact(con));
app.route('/api/tweets').get(getTweets());


// handle 404 - keep as last route 
router.route('*').get((req, res) => {
    res.status(404);
    return res.send({ error: '404 Not found' });
})

const port = process.env.SERVER_PORT || 4000;

const connect = () => {
    con.connect((err) => {
        if(err) {
            // show error msg on failure
            return console.error(prefix + 'ERROR. ' + err.message);
        }
        console.log(prefix + `connected to database "${process.env.DBNAME}"`);
    });
}

app.listen(port, () => {
    connect();

    con.query("CREATE TABLE IF NOT EXISTS contact (name VARCHAR(255), email VARCHAR(255), subject VARCHAR(255), message TEXT, time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)", (err, result) => {
        console.log(prefix + "contact table loaded");
    });

    con.query("CREATE TABLE IF NOT EXISTS blog (categorie VARCHAR(255), title VARCHAR(255), text TINYTEXT, created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, content TEXT)", (err, result) => {
        console.log(prefix + "blog table loaded");
    });

    console.log(`SERVER > nodejs server started on port ${port}`);
});