const express = require('express');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const mysql = require('mysql2')
var request = require("request");
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

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

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-qyqv5sl1.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'www.fabianwaller.de/api',
  issuer: 'https://dev-qyqv5sl1.eu.auth0.com/',
  algorithms: ['RS256']
});


var options = { method: 'POST',
  url: 'https://dev-qyqv5sl1.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"5pLdElBfLyBMtqA5sc1uglP1HBufq94L","client_secret":"NOBZRU8Clc5fodu_f3K5gki8a-3aJp6qW15QTD80M2cxlT8yhkXiPI9V4VoR4Fop","audience":"www.fabianwaller.de/api","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // https://manage.auth0.com/dashboard/eu/dev-qyqv5sl1/apis/62535732e1f1620040133389/test
  // log bearer token response
  //console.log(body);

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

app.get("/blog/*", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/client/index.html'))
});

app.get("/cdn/:content", (req, res) => {
    res.sendFile(path.join(__dirname, '/cdn/' + req.params.content))
});

app.get('/api/hello', async (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.route('/api/articles').get(getArticles(con));
app.route('/api/tweets').get(getTweets());

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});


app.route('/api/articles').post(createArticle(con));
app.route('/api/contact').post(handleContact(con));

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

    con.query("CREATE TABLE IF NOT EXISTS blog (slug VARCHAR(255), title VARCHAR(255), categorie VARCHAR(255), imageurl VARCHAR(255), text TINYTEXT, created_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, content TEXT)", (err, result) => {
        console.log(prefix + "blog table loaded");
    });

    console.log(`SERVER > nodejs server started on port ${port}`);
});