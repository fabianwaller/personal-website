import express, { application } from 'express';
import router from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { config } from 'dotenv';
import { Server } from 'http';
config();

const prefix = 'SERVER > ';

const app = express();

app.use(express.static("dist/client"));
app.use(express.json());

app.use(router);

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
    console.log(prefix + `nodejs server started on port ${port}`);
});

export default app;