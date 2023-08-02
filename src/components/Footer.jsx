import { Typography, Box, Stack } from '@mui/material'
import { Copyright } from '@mui/icons-material'
import React from 'react'
import { logo } from '../utils/constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<Box  p={2} 
    sx={{position:'sticky', background:'#fc1503', top:'0', justifyContent:'space-between'}}>
    <Stack direction='row' justifyContent='space-between'>
        <Box>
            <Link to='/' style={{display:'flex', alignItems:'center'}}>
                <img src={logo} alt="Logo" height={45}/>
                <Typography sx={{color:'black', fontWeight:'bold', letterSpacing:'-2px'}} variant='h4'>YouTube</Typography>
            </Link>
        </Box>
        <Box sx={{height:'10px', display:'flex', flexDirection:'row', marginTop:'10px'}}>
                <Copyright/> 
                <Typography> CopyRight 2023 IMENA Rwigema Herve</Typography>
        </Box>
        </Stack>
    </Box>
  )
}

export default Footer
