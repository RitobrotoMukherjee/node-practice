const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const DB = 'e-comm';
const COLLECTION = 'products';

const dbConnection = async () => {
    const connection = await client.connect();
    console.log(`Server connection established to: ${url}`);
    const db = connection.db(DB);
    return db.collection(COLLECTION);
}

module.exports = dbConnection;