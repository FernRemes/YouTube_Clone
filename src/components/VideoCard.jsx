import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
function VideoCard ({ video: { id: { videoId }, snippet } }) {
    const [hoverColor, setHoverColor] = React.useState('');

    const handleMouseEnter = () => {
        setHoverColor(getRandomColor());
    };

    const handleMouseLeave = () => {
        setHoverColor('');
    };
  return (
    <Card 
    sx={{ 
        width: { xs: '355px', sm: '358px', md: '340px', }, 
        boxShadow: "3px 5px 10px rgba(255, 255, 255, .3)",
        '&:hover': {
          boxShadow: {md: `3px 5px 10px ${hoverColor}`, xs: '1px 1px 5px rgba(255, 255, 255, .5)'},
        },
        borderRadius: 2}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: '340px'}, height: 160 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '80px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/c/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
  );
};

export default VideoCard