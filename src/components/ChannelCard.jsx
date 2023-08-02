import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{boxShadow:'1 white', borderRadius:'20px',
    width:{xs:'100%', sm:'320px'}, margin:'auto', marginTop:marginTop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', 
        justifyContent:'center', textAlign:"center", color:'#fff'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
          alt={ channelDetail?.snippet?.title}
          sx={{borderRadius:'50%', height:'180px', width:'180px', marginBottom:2,marginLeft: 5, border:'1px solid', color:'#000' }}/>
          <Typography sx={{color:'black'}} variant='h6'>{channelDetail?.snippet?.title}<CheckCircle  sx={{ fontSize: "12px", color: "gray", ml: "8px" }} /></Typography>
          {channelDetail?.statistics?.subscriberCount&&(
            <Typography sx={{color:'black'}}>{parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
