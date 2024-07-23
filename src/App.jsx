import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './/components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
    <Box sx = {{backgroundColor:'#0f0f0f'}}>
        <Routes>
            <Route path = '/' exact element = {<Navbar/>}/>
            <Route path = '/video/:id' element = {<VideoDetail />}/>
            <Route path = '/c/:id' element = {<ChannelDetail />}/>
            <Route path = '/search/:searchTerm' element = {<SearchFeed />} />

        </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App
