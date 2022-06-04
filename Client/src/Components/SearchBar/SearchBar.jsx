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
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault(e)
        
        dispatch(getDataName(name))
        setName("")
        console.log(`aqui esta el submit ${name}`)
    }
  return (
    <div className='SearchBar'>
    <input placeholder='Nombre/Numero de registro' className='inputSearch' type='text'
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