const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });

const connection = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to server');
      return client;
  } catch(e) {
    console.log(e);
    return Promise.reject(e);
  }
}

const connectionObject = connection();
exports.connectionObject = connectionObject;
