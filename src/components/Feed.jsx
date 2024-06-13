import React, { useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar'
import Videos from './Videos'
function Feed({ isCollapsed }) {
  
  return (
    <Stack sx = {{ flexDirection: {sx: "column", md: "row"}}}>  
    <Box sx = {{ height: {sx: "auto", md: "96vh", lg: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
        <Sidebar isCollapsed={isCollapsed} />
      <Typography className = "copyright" variant = "body2" sx = {{mt:1.5, color: "#ffff", display: { xs: 'none', md: isCollapsed ? 'none' : 'block' }}}>
        © {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>

    <Box p ={2} sx = {{ overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography variant = "h4" fontWeight = "bold" mb = {2} sx ={{color: "white"}}>
        New <span>videos</span>
      </Typography>

      <Videos/>
    </Box>

    </Stack>
    
  )
}

export default Feed
