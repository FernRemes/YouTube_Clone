import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box, Stack, Typography} from '@mui/material';
import SearchBar from './SearchBar';

import Sidebar from './Sidebar';
import Videos from './Videos';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import {Link} from 'react-router-dom';
import Feed from './Feed';

import {fetchFromAPI} from '../utils/FetchFromAPI';

function SearchFeed({ isCollapsed }) {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  // const [selectedCategory, setSelectedCategory] = useState('')

  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // const handleSidebarToggle = () => {
  //     setIsSidebarCollapsed(!isSidebarCollapsed);
  // };
  
  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  
  return (
    <>
      <Stack 
          direction = "row" 
          alignItems = "center" 
          p = {1} 
          sx = {{position: 'sticky', background: '#0f0f0f', top: 0, justifyContent: 'space-between'}}
      >  
          <Stack direction = "row" alignItems="center" spacing = {2}>
              
              <Link to = '/' style = {{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                  
                  <img src = {"../public/YouTube-Logo-White.png"} alt = "logo" height = {20} style = {{padding: "2px"}}/>
              </Link>
          </Stack>
          <SearchBar/>
          
          
      </Stack>

      <Stack sx = {{ flexDirection: {sx: "column", md: "row"}}}>  
      {/* <Box sx = {{ height: {sx: "auto", md: "96vh", lg: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
          <Sidebar isCollapsed={isSidebarCollapsed} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}  />
        <Typography className = "copyright" variant = "body2" sx = {{mt:1.5, color: "#ffff", display: { xs: 'none', md: isSidebarCollapsed ? 'none' : 'block' }}}>
          © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Box> */}

      <Box p ={2} sx = {{ overflowY: "auto", height: {md: "90vh", xl: "100vh"}, flex: 2}}>
        <Typography variant = "h4" fontWeight = "bold" mb = {2} sx ={{color: "white"}}>
          Search Results for: <span style = {{color: "#3d3d3d"}}>{searchTerm}</span> videos
        </Typography>

        <Videos videos = {videos}  showChannelCard={true}/>
      </Box>

      </Stack>
    </>  
  )
}

export default SearchFeed
