import {MongoClient} from "mongodb";
import {config} from 'dotenv';
import Collection from './collection.js'
config();

class Cluster {

    mongoClient;
    database;

    constructor() {
        this.mongoClient = new MongoClient(process.env.MONGODB_URI);
        this.database = this.mongoClient.db('personal-website');
    }

    getMongoClient() {
        return this.mongoClient;
    }

    getDatabase() {
        return this.database;
    }

    getCollection(collection) {
        return this.database.collection(collection);
    }

    async connect() {
        try {
            await this.mongoClient.connect();
        } catch (error) {
            console.log('Connection to cluster failed', error);
        }
    }

    async disconnect() {
        try {
            await this.mongoClient.close();
        } catch (error) {
            console.log('Failed to disconnect from cluster', error);
        }
    }
}

export default Cluster
