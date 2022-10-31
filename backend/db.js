
// Code for setting up the connection to DB
//const mongoURI = process.env.MONGODB_URI;
//Connect to db using mongoose
const mongoose = require('mongoose');

const _db_client = mongoose.connect(
    'mongodb+srv://CapstoneTeam4:Team4supplychain@cluster0.eenxx45.mongodb.net',
    {useNewUrlParser: true, dbName: 'Deloitte'})
    .then(result => {console.log('Connected to DB-Megha');})
    .catch((err)=>{console.log(err)})

module.exports = _db_client;
