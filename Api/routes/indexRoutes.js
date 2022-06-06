const express = require('express')
const router = express.Router()
const Datas = require('../model/Datas')

//Routes controllers


// Get all data and query for the searchbar input
 router.get('/', (req,res)=>{
    const {name} = req.query;
try{
    if(!name){
        Datas.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json("Error" + err))
    }else{
        const dataName = name.toLowerCase();

        if(dataName === 'toro' ||dataName === 'vaquilona' ||dataName === 'novillo' ){
            Datas.find({type: dataName} ,(err, data) =>{
                if(err) {
                   res.send(err.message);
                }
                else{
                  res.send(data)
                }})
        } if(dataName === 'collar' ||dataName === 'caravana'){
            Datas.find({typeDisp: dataName} ,(err, data) =>{
                if(err) {
                   res.send(err.message);
                }
                else{
                  res.send(data)
                }})
        }else{
            Datas.find({name: dataName} ,(err, data) =>{
                if(err) {
                   res.send(err.message);
                }
                else{
                  res.send(data)
                }})
        }
     
      
    
      
      
    }

}catch(err){
    res.status(400).json("Error" + err)}
});

//Create Datas Post route
router.post('/newdata', async (req,res)=> {
 const { 
 type,
 typeDisp,
 numDisp,
 weight,
 name
} = req.body
const newDatas = new Datas({
    type,
    typeDisp,
    numDisp,
    weight,
    name
})

try{
  const newDate =  await newDatas.save()
  res.status(200).json(newDate)
 }catch(err){
res.status(500).json(err).send('Data values incorrect')
console.log(err)

 }
  
  
})

//Delete datas, Delete route
 router.delete('/delete/:id', async (req,res)=> {
try{

    const id = req.params.id
 await Datas.findByIdAndDelete({_id : id})
 res.status(200).json('Datas has been deleted...')

}catch(err){
    res.status(500).json(err)
    console.log(err)
}  

})

//Update data
router.put('/put/:id', async (req,res)=> {
    const { 
        type,
        typeDisp,
        numDisp,
        weight,
        name,
        
    } = req.body
const updateData = {
    type,
    typeDisp,
    numDisp,
    weight,
    name
}
        try{
         
            await Datas.findByIdAndUpdate({_id: req.params.id},
                {$set:updateData});
            res.status(200).json(updateData)
        
        }catch(err){
            req.statusCode(500).json(err)
            console.log(err)

        }
    })






    module.exports =router