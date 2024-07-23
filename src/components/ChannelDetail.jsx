import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Stack, Box, Typography} from '@mui/material'
import { Link } from "react-router-dom"; 
import {fetchFromAPI} from '../utils/FetchFromAPI';


import Videos from './Videos';
import ChannelCard from './ChannelCard';
import SearchBar from './SearchBar';

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
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

      <Box minHeight="95vh">
      <Box>
        <div className = "gradient-banner" />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} showChannelCard={false} />
        </Box>
      </Box>
    </>
  )
}

export default ChannelDetail
