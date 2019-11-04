const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
 
module.exports = () => {
 const app = express();
 
 app.use(bodyParser.json());//get things by json
 app.use(bodyParser.urlencoded({ extended: true }));//get things by url
 
 consign()
   .include('controller')
   .into(app);
 
 return app;
}