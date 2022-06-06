const mongoose = require('mongoose')
require('dotenv').config();

const {DATABASEURL} = process.env


//URLDATABASE
const url = DATABASEURL

//DATABASE CONNECTION
const db = mongoose.connect(url,{

})
.then(()=> console.log('Database connection successful'))
.catch((e)=> console.log('connection error '+ e)) 


module.exports = db