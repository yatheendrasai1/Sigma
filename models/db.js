const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbUri = "mongodb+srv://admin:Kore123@cluster0.1fqlf.mongodb.net/nailit?retryWrites=true&w=majority";

mongoose.connect(dbUri,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;

var dbConnection = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
dbConnection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbUri);
}); 
  
// If the connection throws an error
dbConnection.on('error',function (err) { 
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
dbConnection.on('disconnected', function () { 
  console.log('Mongoose default connection disconnected'); 
});
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {   
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    });
  });
  
// BRING IN YOUR SCHEMAS & MODELS // For example 
require('../schemas/task');
module.exports = dbConnection;