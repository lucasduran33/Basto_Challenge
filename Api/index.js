const express = require('express');
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const RouteController = require('./routes/indexRoutes')
const app = express();
const db = require('./db')
dotenv.config()
const {PORT} = process.env

//const mongoose = require('mongoose');
//const dotenv = require('dotenv');



//config
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

// Routes
app.use(RouteController)

app.listen(PORT,()=> {
    console.log(  `¡Server UP! in localhost${PORT}!`)
})


module.exports = app