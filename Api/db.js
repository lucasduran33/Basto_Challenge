const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
const {DATABASEURL} = process.env




const url = DATABASEURL
const db = mongoose.connect(url,{

})
.then(()=> console.log('Database connection successful'))
.catch((e)=> console.log('connection error '+ e)) 


module.exports = db