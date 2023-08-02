import {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import Videos  from './videos'
import {fetchFromAPI} from '../utils/fetchFromAPI.js'
import { useParams } from 'react-router-dom'


const SearchFeed= ()=>{
  const [videos, setVideos]= useState([]);
  const {searchTerm}= useParams()
    useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))},[searchTerm]);
  return (
     <Box p={4} sx={{paddingLeft:'10px', overflowY:'auto', height:'90vh', flex:2, marginLeft:2}}>
      <Typography variant='h5' fontWeight='bold' mb={3} sx={{color:'black'}}>
      {`Search Results for: ${searchTerm}`} <span style={{color:'#F31503' }}>videos</span></Typography>
     <Videos videos={videos} />
     </Box>
  )
}  ;

export default SearchFeed
