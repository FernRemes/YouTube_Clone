import React, { useState, useEffect} from 'react'

import {Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';

import {fetchFromAPI} from '../utils/FetchFromAPI';

function Feed({ isCollapsed }) {
  const [selectedCategory, setSelectedCategory] = useState('Home')
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  
  return (
    <Stack sx = {{ flexDirection: {sx: "column", md: "row"}}}>  
    <Box sx = {{ height: {sx: "auto", md: "96vh", lg: "92vh"}, borderRight: "1px solid #3d3d3d", px: { xs: 0, md: 2 }}}>
        <Sidebar isCollapsed={isCollapsed} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
      <Typography className = "copyright" variant = "body2" sx = {{mt:1.5, color: "#ffff", display: { xs: 'none', md: isCollapsed ? 'none' : 'block' }}}>
        © {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>

    <Box p ={2} sx = {{ overflowY: "auto", height: {md: "90vh", xl: "100vh"}, flex: 2, pt: {xs: 10, md: 1}, ml:{xs: "-2px", sm: 2, md: 10}}}>
      <Typography variant = "h4" fontWeight = "bold" mb = {2} sx ={{color: "white"}}>
        {selectedCategory === 'Home' ? 'New' : selectedCategory  } <span>videos</span>
      </Typography>

      <Videos videos = {videos}  showChannelCard={true}/>
    </Box>

    </Stack>
    
  )
}

export default Feed
