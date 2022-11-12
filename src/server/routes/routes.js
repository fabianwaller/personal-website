import express from 'express';
import { createArticle, deleteArticle, getArticles, verifyCache } from '../controllers/blog.js';
import { handleContact } from '../controllers/contact.js';
import { getCommands } from '../controllers/commands.js';
import { handle404PageNotFound } from '../controllers/errors.js';
import { handleNewsletterSignup, handleNewsletterVerification } from '../controllers/newsletter.js';
import { serveApp } from '../controllers/app.js';
import { serveCdnContent } from '../controllers/cdn.js';

import authenticate from '../helpers/auth.js'

const router = express.Router();

router.route('/api/articles').get(verifyCache, getArticles());
router.route('/api/articles').post(authenticate, createArticle());
router.route('/api/articles').delete(authenticate, deleteArticle());

router.route('/api/contact').post(handleContact());
router.route('/api/commands').get(getCommands());

router.route('/api/newsletter/signup').post(handleNewsletterSignup());
router.route('/api/newsletter/verify').post(handleNewsletterVerification());

router.route('/api/*').get(handle404PageNotFound());
router.route("/cdn/:content").get(serveCdnContent());

router.route("*").get(serveApp());

export default router