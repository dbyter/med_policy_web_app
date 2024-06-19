import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbyt3r:superduper1A@medicalpolicy.zyzj0bh.mongodb.net/?retryWrites=true&w=majority&appName=Medicalpolicy";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
ReactDOM.render(<App />, document.getElementById('root'));
