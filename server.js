const express = require('express');
const axios = require('axios').default;
const cheerio = require('cheerio');
const cors = require('cors');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
var http = require('http').Server(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://CapstoneTeam4:Team4supplychain@cluster0.eenxx45.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var collection;
var collection2;

client.connect(err => {
  console.log("succesfully connected!")
  collection = client.db("Deloitte").collection("Technology");
  collection2 = client.db("Deloitte").collection("Manufacturing"); 
});
  