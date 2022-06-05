import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { getDataName } from '../../Redux/action'

import './searchBar.css'
const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName]= useState("")

    function handleSearch(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault(e)
        
        dispatch(getDataName(name))
        setName("")
    }
  return (
    <div className='SearchBar'>
    <input placeholder='Nombre/Tipo de animal/Tipo de Dispositivo' className='inputSearch' type='text'
     onChange={(e) => handleSearch(e)}
    />
    <button 
    className='buttonSearch'
    onClick={(e)=> handleSubmit(e)}
    >Buscar</button>
  </div>
  )
}

export default SearchBar