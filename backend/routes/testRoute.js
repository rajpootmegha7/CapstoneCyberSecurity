/*
@Desc : This file was created to use it later while creating other API's for technology and Manufacturing.
*/

const router = require('express').Router();
const authorization = require('../middleware/authorization');

router.get('/industry', authorization, (req, res) => {
    console.log('In Industry')
    res.json({
        industry_details: {
            title: 'ABC',
            desc: 'Test Description'
        }
    })
})

router.get('/technology', authorization, (req, res) => {
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

  router.get('/automotive', authorization, (req, res) => {
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


module.exports = router;