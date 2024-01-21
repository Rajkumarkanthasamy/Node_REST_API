const {MongoClient} = require('mongodb');

module.exports = async () => {

  const uri =process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  await client.connect().then(() => {
    console.log('Mongodb connected....');
  })
  .catch(err => console.log(err.message));

  const dbName = "sample_airbnb";
  const collectionName = "MQTTDATA1";

  // Create references to the database and collection in order to run
  // operations on them.
    const database = client.db(dbName);
   database.collection(collectionName);


  // mongoose
  //   .connect(process.env.MONGODB_URI, {
  //     dbName: process.env.DB_NAME,
  //     user: process.env.DB_USER,
  //     pass: process.env.DB_PASS,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  //   })
  //   .then(() => {
  //     console.log('Mongodb connected....');
  //   })
  //   .catch(err => console.log(err.message));

  

  await client.close();
};
