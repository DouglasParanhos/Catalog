const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
// const cors = require('cors');
 
module.exports = () => {
 const app = express();

 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 
 consign()
   .include('controller')
   .into(app);
 
 return app;
}