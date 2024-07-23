import React, {useState} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import Videos from './Videos';
import Feed from './Feed';
function Navbar() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  return (
    <>

    <Stack 
        direction = "row" 
        alignItems = "center" 
        p = {1} 
        sx = {{position: 'sticky', background: '#0f0f0f', top: {xs: "-2px", md: 0}, justifyContent: 'space-between', ml: { xs: -1, md: 2}, zIndex: 100 }}
    >  
        <Stack direction = "row" alignItems="center" spacing = {2}>
            <Box
            sx={{ 
                display: { xs: 'none', md: 'flex' }, // Hide on small screens (xs, sm), show on medium (md) and larger screens
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                borderRadius: 10,
                '&:hover': {
                backgroundColor: 'gray',
                },
                cursor: 'pointer',
                
                
            }}
            onClick={handleSidebarToggle}
            >
            <ViewHeadlineIcon sx={{ color: 'white' }} />
            </Box>
            <Link to = '/' style = {{display: 'flex', alignItems: 'center'}}>
                
                <img src = {"public/YouTube-Logo-White.png"} alt = "logo" height = {20} style = {{padding: "2px"}}/>
            </Link>
        </Stack>
        <SearchBar/>
        
        
    </Stack>
    <Feed isCollapsed = {isSidebarCollapsed}/>
    </>
  )
}

export default Navbar
