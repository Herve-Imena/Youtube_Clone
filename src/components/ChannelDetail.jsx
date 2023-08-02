import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import ChannelCard from './ChannelCard'
import Videos from './videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail]= useState(null)
  const [videos, setVideos]= useState([])
  const {id} = useParams();
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> {setVideos(data?.items)})},[id])
    console.log(videos)
  return (
    <Box minHeight='95vh'>
      <Box>
      <div style={{
      background:' linear-gradient(90deg, rgba(166,0,0,1) 0%, rgba(68,0,214,1) 100%)', 
      zIndex:10, height:'300px'}}/>
       <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'> 
      <Box sx={{mr:{sm:'120px'}}}/>
        <Videos videos={videos}/>
      </Box>
      </Box>
  )
}

export default ChannelDetail
