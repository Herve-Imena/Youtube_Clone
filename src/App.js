import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Footer } from './components'

const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Box sx={{ background:"#fff"}}>
      <Navbar/>
      <Routes>
        <Route path='/'  exact element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/Search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  </div> 
   )
}

export default App
