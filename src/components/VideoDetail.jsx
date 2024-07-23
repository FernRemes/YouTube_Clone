import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {fetchFromAPI} from '../utils/FetchFromAPI';

import Videos from './Videos';
import SearchBar from "./SearchBar";
import Loader from './Loader';

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]) 
  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;



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
    <Box minHeight={ "98vh"}>
      <Stack direction = {{xs: 'column', md: 'row'}}>
        <Box flex = {1}>
          <Box sx = {{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer 
              url = {`https://www.youtube.com/watch?v=${id}`} 
              className = "react-player" 
              controls
              playing 
            />
            <Typography color = '#ffff' variant = 'h5' fontWeight = "bold" p = {2}>
              {title}
            </Typography>

            <Stack direction = "row" justifyContent = "space-between" sx = {{ color: "#ffff" }} py ={1} px = {2}>
              <Link to = {`/c/${channelId}`}>
                <Typography variant= "subtitle1"  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx = {{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction = "row" gap = "20px" alignItems = "">
                <Typography variant = "body1" sx = {{ opacity: 0.8 }} color = "#ffff">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant = "body1" sx = {{ opacity: 0.8 }} color = "#ffff">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

        </Box>
      <Box px= {2} py = {{md: 1, xs: 5 }} justifyContent = "center" alignItems = "center">
        <Videos videos = {videos} direction={isSmallScreen ? 'row' : 'column'}/>

      </Box>

      </Stack>


    </Box>
    </>
  )
}

export default VideoDetail
