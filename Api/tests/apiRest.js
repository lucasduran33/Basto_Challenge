const chai = require('chai')
const chaiHttp= require('chai-http')
const server = require('../index')

const should = chai.should();
chai.use(chaiHttp) 
describe('Datas api', () => {


    
    //GET operation rute
describe("GET /", () => {
    it('it should get All the datas ',(done)=>{
        chai.request(server)
        .get('/')
        .end((err,response)=> {
            response.should.have.status(200);
            response.body.should.be.a('array')
            done();
        })
    })
    it('it should NOT get All the datas ',(done)=>{
        chai.request(server)
        .get('/wrong')
        .end((err,response)=> {
            response.should.have.status(404);
            done();
            
})
})

})
})

//Test the Post route
describe("POST /newdata", () => {
    it('it should POST a new data',(done)=>{
        const bodyObject = {
            type: "vaquillona",
            typeDisp: "collar",
            numDisp: "EFEF34354FEF",
            weight: 32,
            name: "vacagrande",
        }
        chai.request(server)
        .post('/newdata')
        .send(bodyObject)
        .end((err,response)=> {
            response.should.have.status(200);
            response.body.should.be.a('object')
            response.body.should.have.property('name').eq("vacagrande")
            response.body.should.have.property('type').eq("vaquillona")
            response.body.should.have.property('typeDisp').eq("collar")
            response.body.should.have.property('numDisp').eq("EFEF34354FEF")
            response.body.should.have.property('weight').eq(32)

            done();
        })
    })
    it('it should NOT POST correct data',(done)=>{
        const bodyObject = {
            type: "vaquil",
            typeDisp: "cinturon",
            numDisp: "EFEF34354FEF",
            weight: 32,
            name: "vacagrande",
        }
        chai.request(server)
        .post('/newdata')
        .send(bodyObject)
        .end((err,response)=> {
            response.should.have.status(500);
           
            done();
        })
    })
})
            
//test the PUT route  
describe("PUT /put", () => {
    it('it should PUT a  data',(done)=>{
       
        const bodyObject = {
          
            type: "vaquillona",
            typeDisp: "collar",
            numDisp: "EFEF34354FEF",
            weight: 32,
            name: "changedname",
        }
        chai.request(server)
        .put('/put/' + '629ca8ee28449f46f403a16b' )
        .send(bodyObject)
        .end((err,response)=> {
            response.should.have.status(200);
            response.body.should.be.a('object')
            response.body.should.have.property('name').eq("changedname")
            response.body.should.have.property('type').eq("vaquillona")
            response.body.should.have.property('typeDisp').eq("collar")
            response.body.should.have.property('numDisp').eq("EFEF34354FEF")
            response.body.should.have.property('weight').eq(32)
            done();
        })
    })
   
        })
 
//Test the DELETE route
describe("PUT /put", () => {
    it('it should PUT a  data',(done)=>{
       
        const bodyObject = {
          
            type: "vaquillona",
            typeDisp: "collar",
            numDisp: "EFEF34354FEF",
            weight: 32,
            name: "changedname",
        }
        chai.request(server)
        .put('/put/' + '629ca8ee28449f46f403a16b' )
        .send(bodyObject)
        .end((err,response)=> {
            response.should.have.status(200);
            response.body.should.be.a('object')
            response.body.should.have.property('name').eq("changedname")
            response.body.should.have.property('type').eq("vaquillona")
            response.body.should.have.property('typeDisp').eq("collar")
            response.body.should.have.property('numDisp').eq("EFEF34354FEF")
            response.body.should.have.property('weight').eq(32)
            done();
        })
    })
    // it('it should PUT a incorrect data',(done)=>{
       
    //     const bodyObject = {
          
    //         type: "colar",
    //         typeDisp: "carav",
    //         numDisp: "EFEF34354FEF",
    //         weight: 32,
    //         name: "changedname",
    //     }
    //     chai.request(server)
    //     .put('/put/' + '629ca8ee28449f46f403a16b' )
    //     .send(bodyObject)
    //     .end((err,response)=> {
    //         response.should.have.status(500);
    
    //         done();
    //     })
    // })
        })



  //TEST a DELETE route
  describe("PUT /put", () => {
    it('it should PUT a  data',(done)=>{
       
        const bodyObject = {
          
            type: "vaquillona",
            typeDisp: "collar",
            numDisp: "EFEF34354FEF",
            weight: 32,
            name: "changedname",
        }
        chai.request(server)
        .put('/put/' + '629ca8ee28449f46f403a16b' )
        .send(bodyObject)
        .end((err,response)=> {
            response.should.have.status(200);
            response.body.should.be.a('object')
            response.body.should.have.property('name').eq("changedname")
            response.body.should.have.property('type').eq("vaquillona")
            response.body.should.have.property('typeDisp').eq("collar")
            response.body.should.have.property('numDisp').eq("EFEF34354FEF")
            response.body.should.have.property('weight').eq(32)
            done();
        })
    })
 
        })



        //Test the DELETE route

        describe("DELETE /delete", () => {
            it('it should DELETE a  data',(done)=>{      
                chai.request(server)
                .delete('/delete/' + '629ca8ee28449f46f403a16b' )  
                .end((err,response)=> {
                    response.should.have.status(200);
         
                    done();
                })
            })
         
                })
                