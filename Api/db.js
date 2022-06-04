const mongoose = require('mongoose')


const url = 'mongodb://localhost/Basto_challenge'

const db = mongoose.connect(url,{

})
.then(()=> console.log('conectado a mongo'))
.catch((e)=> console.log('error a mongo'+ e)) 


module.exports = db