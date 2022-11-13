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
  collection2 = client.db("Deloitte").collection("Automotive"); 
});

app.get('/technology', (req, res) => {
    console.log(collection);
    var process = collection.find({}).toArray().then(() => {
      console.log(process)
  
      // Find all documents in the collection
      collection.find({}).toArray(function (err, process) {
        if (!err) {
          console.log(process);
          //var planning_t= process[0]; //planning process of tech supply chain process
          //var supply_t= process[1]; //supply process of tech supply chain 
          //var invmgt_t= process[2]; //inventory management process of tech supply chain 
         //var manufac_t= process[3]; //manufacturing process of tech supply chain 
         //var delivery_t= process[4]; //delivery process of tech supply chain 
         //var custsupport_t= process[5]; //customer support process of tech supply chain 
         //var custsupport_t= process[5]; //customer support process of tech supply chain 
         
        //   res.send(process); //send all data from technology collection of Deloitte database
          
          console.log("tech processes: ", process); //log data to the console as well
        }
      });
    });
  
  });

  app.get('/automotive', (req, res) => {
    console.log(collection2);
    var process2 = collection2.find({}).toArray().then(() => {
      console.log(process2)
  
      // Find all documents in the collection
      collection2.find({}).toArray(function (err, process2) {
        if (!err) {
          console.log(process2);
          //var planning_a= process2[0]; //planning process of auto supply chain process
          //var supply_a= process2[1]; //supply process of auto supply chain 
          //var invmgt_a= process2[2]; //inventory management process of auto supply chain 
         //var manufac_a= process2[3]; //manufacturing process of auto supply chain 
         //var delivery_a= process2[4]; //delivery process of auto supply chain 
         //var custsupport_a= process2[5]; //customer support process of auto supply chain 
         //var custsupport_a= process2[5]; //customer support process of auto supply chain 
         
        //   res.send(process2); //send all data from automotive collection of Deloitte database
          
          console.log("auto processes: ", process2); //log data to the console as well
        }
      });
    });
  
  });

  
  app.listen(3000, () => console.log('Example app is listening on port 3000.')); 
