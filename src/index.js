// import express from 'express';
var express = require('express');
var router = express.Router()

var bodyParser = require('body-parser');






import config from './config'
import Database from './app/database'
import Model from './app/model'
import ResponseHelper from './app/classes/ResponseHelper'
global.ResponseHelper = ResponseHelper
global.db = new Database(config.db.MONGO_DB_URI)
global.model = new Model(db.connection)
global.APP_SECRET = process.env.APP_SECRET || "81F44FB42275569BF89A1946CC631"
db.connect()
global.USERID = null
global.USER = null





var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



import User from './routes/User'
app.use('/api/', User)



app.listen(process.env.PORT || 5001, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`Express Server is now running on localhost:${process.env.PORT || 5001}`)
})