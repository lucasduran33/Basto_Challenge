const express = require('express');
const logger = require('morgan')
const cors = require('cors')
const RouteController = require('./routes/indexRoutes')
const app = express();
const bodyParser = require('body-parser')
const db = require('./db')
//const mongoose = require('mongoose');
//const dotenv = require('dotenv');



//config
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

// 
app.use(RouteController)


app.listen(3001,()=> {
    console.log( '¡Server UP! en localhost')
})
