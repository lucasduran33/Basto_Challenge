import { useState, useEffect, useMemo } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getDatas, postData, deleteData, updateData } from './Redux/action'
import SearchBar from './Components/SearchBar/SearchBar'
import Paginado from './Components/Paginado/Paginado'
import {Table, Button, Container,Modal, ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap'
import { AiOutlineForm,AiFillBell,AiFillDelete,AiOutlineImport } from "react-icons/ai";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//https://www.youtube.com/watch?v=A3xQx3uzyuc&t=30s&ab_channel=Inform%C3%A1ticaDP



function App() {
  const dispatch = useDispatch()
  
  const allDatas = useSelector((state) => state.datas)

//Modal open-close
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  //Forms Input information
  const [input,setInput]= useState({
    name:"",
    type:"",
    typeDisp:"",
    numDisp:"",
    weight:0,
  })
//Form validations 
const disableSubmit = useMemo(() =>{
  if(
      input.name.length > 0 &&
      input.type.length > 0 &&
      input.typeDisp.length >  0 &&
      input.weight  >= 1  &&
      input.numDisp.length > 0
  ){
     return false;
  }else{
      return true;
  }
},[input]);
//Paginado Logic
const [currentPage,setCurrentPage]= useState(1)// current page
const [dataPerPage, setdataPerPage]= useState(4) //data per page
const indexOfLastData = currentPage * dataPerPage // 12
const indexOfFirstData = indexOfLastData - dataPerPage
const currentData = allDatas.slice(indexOfFirstData,indexOfLastData)  

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber)
}



useEffect(()=> {
  dispatch(getDatas())

},[dispatch])



function modalInsert(){
      if(modal === false){
        setModal(true)
        
        dispatch(getDatas())
      }else{
        setModal(false)
        dispatch(getDatas())
      }
    }
    
    function modalEditInput(registro){
      if(modalEdit === false){
        setModalEdit(true)
        setInput(registro)
        dispatch(getDatas())
      }else{
        setModalEdit(false)
        dispatch(getDatas())
        setInput({
          name:"",
          type:"",
          typeDisp:"",
          numDisp:"",
          weight:0,
        })
      }
    }
    function handleChange(e){
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }
function deleteItemList(id){
  dispatch(deleteData(id))
  dispatch(getDatas())
  dispatch(getDatas())
  
}
function updateItemList(dato){
dispatch(updateData(dato._id , input))
setModalEdit(false)
dispatch(getDatas())
setInput({
  name:"",
  type:"",
  typeDisp:"",
  numDisp:"",
  weight:0,
})
dispatch(getDatas())


}

function handleSubmit(e){
  e.preventDefault()
  console.log(input)
  dispatch(postData(input))
  setInput({
    name:"",
    type:"",
    typeDisp:"",
    numDisp:"",
    weight:0,
  })
  dispatch(getDatas())
  setModal(false)
  dispatch(getDatas())
 

}

  return (
    <div className="App">
<div className='navbar'>
<div className='bellop'>
  <AiOutlineImport color='#5b5b5b' size={25}/>
 
    </div>    
 <div className='outop'>
 <AiFillBell color='#5b5b5b' size={25}/>

 </div>


</div>

<div> <h5 className='subtitle'>Admin/Dispositivos</h5></div>
<div className='titleOne'>
 <h1>Gestion De dispositivo </h1> 
</div>
<div>
  <Button color='success' onClick={modalInsert} >
   Nuevo dispositivo
  </Button>
</div>
<div className='subTwo'>
<h2>Dispositivo</h2>
</div>
<SearchBar/>
<div  className='subTwo'>
<h2>Lista de dispositivos</h2>
</div>
<div>
  <Table>
     <thead><tr>
     <th>ID Senasa</th>
     <th>Nombre potrero</th>
     <th>Tipo de animal</th>
     <th>Peso</th>
     <th>Tipo Dispositivo</th>
     <th>Numero de  Dispositivo</th>
<th>Acciones</th>
     </tr></thead>
     <tbody>
    {
      currentData.map((el,idx) =>( 
        <tr key={idx}>
        <td>{el._id}</td>
        <td>{el.name}</td>
        <td>{el.type}</td>
        <td>{el.weight}</td>
        <td>{el.typeDisp}</td>
        <td>{el.numDisp}</td>
<td><Button onClick={()=>{modalEditInput(el)}}  color="success"><AiOutlineForm  size={22}/></Button></td>
<td><Button onClick={()=>deleteItemList(el._id)} color="danger"><AiFillDelete size={22} /></Button></td>

      </tr>
      ))
    }

      
    </tbody>
  </Table>
</div>
<div>
<Paginado dataPerPage={dataPerPage} allData={allDatas.length} paginado={paginado} setCurrentPage={setCurrentPage}  currentPage={currentPage} />
</div>

<div>
  
  <Modal isOpen={modal}>
    <ModalHeader>
      <div>
        <h3>Insertar dispositivo</h3>
      </div>
    </ModalHeader>
    <ModalBody>
    
      <FormGroup>
        <label>Nombre del potrero:</label>
        <input name='name' value={input.name}  onChange={(e) =>handleChange(e)} required className='form-control'/>
      </FormGroup>
      <FormGroup>
        <label>Tipo de animal:</label>
        <select  name='type' className='form-control' defaultValue='Tipo De Animal' required onChange={(e) =>handleChange(e)}>
        <option disabled value='Tipo De Animal'>Tipo de Animal</option>
          <option value='novillo'>Novillo</option>
          <option value='toro'>Toro</option>
          <option value='vaquillona'>Vaquillona</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label>Peso(kg):</label>
        <input  maxLength={4} name='weight' value={input.weight}  required onChange={(e) =>handleChange(e)} className='form-control' type='number' min={1} max={600}/>
      </FormGroup>
      <FormGroup>
        <label>Tipo de dispositivo:</label>
        <select name='typeDisp' className='form-control' required defaultValue='Tipo De Dispositivo' onChange={(e) =>handleChange(e)}>
      
            <option disabled value='Tipo De Dispositivo'>Tipo de Dispositivo</option>

          <option value='collar'>Collar</option>
          <option value='caravana'>Caravana</option>
        </select>
      </FormGroup>


      <FormGroup>
        <label>Numero de dispositivo:</label>
        <input  maxLength={18}  name='numDisp'  value={input.numDisp}  required onChange={(e) =>handleChange(e)} className='form-control'/>
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button type='submit' disabled={disableSubmit} color='primary' onClick={(e)=>handleSubmit(e)}>Insertar</Button>
      <Button color='danger' onClick={modalInsert}>Cancelar</Button>
    </ModalFooter>
  </Modal>
  
</div>

<div>
  <Modal isOpen={modalEdit}>
    <ModalHeader>
      <div>
        <h3>Editar dispositivo</h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <FormGroup>
        <label>ID:</label>
        <input readOnly  value={input._id}  className='form-control'/>
      </FormGroup>
      <FormGroup>
        <label>Nombre del potrero:</label>
        <input name='name' value={input.name}  onChange={(e) =>handleChange(e)} className='form-control'/>
      </FormGroup>
      <FormGroup>
        <label>Tipo de animal:</label>
        <select  name='type' className='form-control' defaultValue='Tipo De Animal' required onChange={(e) =>handleChange(e)}>
        <option disabled value='Tipo De Animal'>Tipo de Animal</option>
          <option value='novillo'>Novillo</option>
          <option value='toro'>Toro</option>
          <option value='vaquillona'>Vaquillona</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label>Peso(kg):</label>
        <input  maxLength={4}  name='weight' value={input.weight}  onChange={(e) =>handleChange(e)} className='form-control' type='number' min={1} max={600}/>
      </FormGroup>
      <FormGroup>
        <label>Tipo de dispositivo:</label>
        <select name='typeDisp' className='form-control' required defaultValue='Tipo De Dispositivo' onChange={(e) =>handleChange(e)}>
        <option disabled value='Tipo De Dispositivo'>Tipo de Dispositivo</option>
          <option value='collar'>Collar</option>
          <option value='caravana'>Caravana</option>
        </select>
      </FormGroup>


      <FormGroup>
        <label>Numero de dispositivo:</label>
        <input  maxLength={18} name='numDisp' value={input.numDisp}  onChange={(e) =>handleChange(e)} className='form-control'/>
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button type='submit' color='primary' disabled={disableSubmit} onClick={()=>updateItemList(input)}>Editar</Button>
      <Button color='danger' onClick={modalEditInput}>Cancelar</Button>
    </ModalFooter>
  </Modal>
</div>











  

</div>
  )
}

export default App
