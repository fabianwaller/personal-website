import { MongoClient } from "mongodb";
import { config } from 'dotenv';
config();

class Cluster {

    mongoClient;

    constructor() {
        this.mongoClient = new MongoClient(process.env.DB_URI);
        this.connect();
    }

    getMongoClient() {
        return this.mongoClient;
    }

    async connect() {
        try {
            console.log('Connecting to MongoDB Atlas cluster...');
            await this.mongoClient.connect();
            console.log('Successfully connected to MongoDB Atlas!');
        } catch (err) {
            console.log('Connection to MongoDB Atlas failed', err);
            process.exit();
        }
    }

    async disconnect() {
        await this.mongoClient.close();
    }

    async runClusterExample() {
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
}

export default Cluster
