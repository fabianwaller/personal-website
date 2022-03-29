const express = require('express');
const path = require('path');
require('dotenv').config();
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: 3306,
    ssl: false
})

const prefix = 'DATABASE > ';

const app = express();
const router = express.Router();

//app.use(express.static("dist"));
app.use(express.json());

/* app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/blog.html'));
}); */

app.get('/api/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

const {getArticles, createArticle} = require('./controllers/blog');
const {getTweets} = require('./controllers/twitter');

//app.route('/api/articles').get(getArticles(con, null))

app.route('/api/articles').get(getArticles(con, null)).post(createArticle(con));
app.route('/api/tweets').get(getTweets());


// Handle 404 - Keep this as a last route 
router.route('*').get((req, res) => {
    res.status(404);
    return res.send({ error: '404 Not found' });
})

const port = process.env.SERVER_PORT || 4000;

const connect = async () => {
    con.connect((err) => {
        if(err) {
            // show error msg on failure
            return console.error(prefix + 'ERROR. ' + err.message);
        }
        console.log(prefix + `connected to "${process.env.DBNAME}"`);
    });

    con.query("SELECT * FROM blog", (err, result) => {
        con.query("CREATE TABLE IF NOT EXISTS blog (categorie VARCHAR(255), title VARCHAR(255), text TINYTEXT, created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, content TEXT)")
        console.log(prefix + "blog table loaded");
    });

}

const start = () => {
    app.listen(port, () => {
        connect();
        console.log(`SERVER > nodejs server started on port ${port}`);
    });
}

start();