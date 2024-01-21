const mongoose = require('mongodb');
const Schema = mongoose.Schema;
const {MongoClient} = require('mongodb');

//const Product = require('../Models/Product.model');

const MongoClientConnection  = async()=>{
const uri ="mongodb+srv://##########@cluster0.ogc3vx8.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect().then(() => {
    console.log('Mongodb connected....');
  })
  .catch(err => console.log(err.message));

  const dbName = "sample_airbnb";
  const collectionName = "######";

  // Create references to the database and collection in order to run
  // operations on them.
    const database = client.db(dbName);
    
    const Product =   database.collection(collectionName);

   return(Product) 
}
module.exports = MongoClientConnection;
