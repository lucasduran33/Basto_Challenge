require('dotenv').config();
const express = require('express');
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const RouteController = require('./routes/indexRoutes')
const app = express();
const db = require('./db')
const {PORT} = process.env





//config
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

// Routes
app.use(RouteController)


//Listen server 
app.listen(PORT,()=> {
    console.log(  `¡Server UP! in localhost${PORT}!`)
})


module.exports = app