import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../utils/images copy.png'
import SearchBar from './SearchBar'

const Navbar = () => (
<Stack direction='row' alignItems='center' p={1} 
    sx={{position:'sticky', background:'#fff', top:'0', justifyContent:'space-between'}}>
    <Link to='/' style={{display:'flex', alignItems:'center'}}>
      <img src={logo} alt="Logo" height={45}/>
      <Typography sx={{color:'black', fontWeight:'bold', letterSpacing:'-2px'}} variant='h4'>YouTube</Typography>
    </Link>
    <SearchBar/>
    </Stack>
)


export default Navbar
