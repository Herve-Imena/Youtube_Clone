import {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos  from './videos'
import {fetchFromAPI} from '../utils/fetchFromAPI.js'

const Feed= ()=>{
  const [selectedCategory, setSelectedCategory]= useState('Trending');
  const [videos, setVideos]= useState([]);
    useEffect(()=>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))},[selectedCategory]);
  return (
   <Stack sx={{flexDirection:{ sx:'column', md:'row'}}}>
     <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #000', px:{sx:0, md:2},mt: '10px', width:140}}>
      <SideBar 
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
     </Box>
     <Box p={4} sx={{paddingLeft:'30px', overflowY:'auto', height:'90vh', flex:2, margin:2, mt:-2}}>
      <Typography variant='h4' fontWeight='bold' mb={3} sx={{color:'black'}}>
        {selectedCategory} <span style={{color:'#F31503' }}>videos</span></Typography>
     <Videos videos={videos} />
     </Box>
   </Stack>
  )
};

export default Feed
