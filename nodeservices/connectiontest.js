const { MongoClient } = require('mongodb');

async function main(fn,data) {
    const uri = 'mongodb+srv://ETenderApp2:ETenderApp2@etenderapp2.tcjiyvn.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect();

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  fn(client,data);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

 }

 async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/**
 * Create a new Airbnb listing
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object} newListing The new listing to be added
 */
async function addData(client, newListing){
    const result = await client.db("ETenderApp").collection("DataSet").insertOne(newListing);
}

async function addTestData(client, newListing){
    const result = await client.db("myDatabase").collection("Recipe").insertOne(newListing);
}

var data = {
    organizationDetails:{
        tenderLocation:"City null",
        tenderAmount:50000,
        tenderCategory:"Infrastructure"},
    business:{name:"TBD"}
}
main(addData,data).catch(console.error);