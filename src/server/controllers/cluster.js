import { MongoClient } from "mongodb";
import { config } from 'dotenv';
config();

class Cluster {

    mongoClient;
    database;
    contactCollection;

    constructor() {
        this.mongoClient = new MongoClient(process.env.DB_URI);
        this.database = this.mongoClient.db('personal-website');
        this.contactCollection = this.database.collection('contact');
        this.connect();
    }

    getMongoClient() {
        return this.mongoClient;
    }

    getDatabase() {
        return this.database;
    }

    getContactCollection() {
        return this.contactCollection;
    }

    async connect() {
        try {
            console.log('Connecting to MongoDB cluster...');
            await this.mongoClient.connect();
            console.log('Successfully connected to the cluster!');
        } catch (err) {
            console.log('Connection to MongoDB failed', err);
            //process.exit();
        }
    }

    async disconnect() {
        console.log('Disconnect cluster');
        await this.mongoClient.close();
    }
}

// make a collection class with collection name parameter as constructor argument

export default Cluster
