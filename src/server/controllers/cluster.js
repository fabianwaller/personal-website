import { MongoClient } from "mongodb";
import { config } from 'dotenv';
config();

export async function connectCluster() {
    console.log(process.env.DB_URI);
    let mongoClient;
    try {
        mongoClient = new MongoClient(process.env.DB_URI);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        return mongoClient;
    } catch (err) {
        console.log('Connection to MongoDB Atlas failed', err);
        process.exit();
    }
}

export async function disconnectCluster(mongoClient) {
    await mongoClient.close();
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