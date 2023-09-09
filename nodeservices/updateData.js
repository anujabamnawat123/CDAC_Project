const { MongoClient } = require('mongodb');

async function updateData(filter,data) {
    const uri = 'mongodb+srv://ETenderApp2:ETenderApp2@etenderapp2.tcjiyvn.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect();

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await client.db("ETenderApp").collection("DataSet").updateMany(filter,data);
    
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

 }

 module.exports = updateData