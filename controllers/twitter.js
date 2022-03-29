//import { TwitterAPI } from 'twitter-api-v2'; 
require('dotenv').config();

const { get } = require('express/lib/response');
const Twitter = require('twitter-v2');

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});


const id = '3087089967';

const getTweets = () => async (req, res) => {
  client.get(`users/${id}/tweets?expansions=author_id&tweet.fields=created_at,public_metrics&media.fields=url&exclude=replies`, '')
    .then(data => res.json(data));
}

module.exports = {
  getTweets
}