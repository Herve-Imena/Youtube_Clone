import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {paper, IconButton, Paper} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm]= useState('')
  const Navigate = useNavigate();
  const handleSubmit=(e)=>{
    if(searchTerm){ 
      Navigate(`search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius:20,
        border:'2px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5},
        display:'flex',justifyContent:'space-between',
        width:'350px',
      }}>
        <input className='search-bar' style={{border:'none',}} placeholder='Search...'
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <IconButton type="submit" sx={{p:'10px', color:'red'}}><Search/></IconButton>
      </Paper>
  )
}

export default SearchBar
