import React from 'react'
import {Box, Typography} from '@mui/material'
import Sidebar from './Sidebar'
function SidebarContainer({ isCollapsed }) {
  return (
    <Box sx = {{ height: {sx: "auto", md: "96vh", lg: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
        <Sidebar isCollapsed={isCollapsed} />
      <Typography className = "copyright" variant = "body2" sx = {{mt:1.5, color: "#ffff", display: { xs: 'none', md: isCollapsed ? 'none' : 'block' }}}>
        © {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>
  )
}

export default SidebarContainer
