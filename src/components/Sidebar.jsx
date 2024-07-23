import React from 'react'
import {Stack} from '@mui/material'

import {categories} from '../utils/constants'

function Sidebar({ isCollapsed, selectedCategory, setSelectedCategory }) {
  return (
    <Stack direction = "row"  className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} sx = {{overflowY: "auto", height: {xs: "auto" , md: "95%"}, flexDirection: {md: "column"}, mt: {md: "10px", xs: "2px"}, overflowX: {xs: 'scroll', md: 'hidden', lg: 'hidden'}, position: {xs: 'fixed', md: 'relative'}
    }}>
      {categories.map((category) => (
        <button 
          className={`category-btn ${category.name === selectedCategory ? 'selected' : ''}`}
          onClick = {() => setSelectedCategory(category.name)} 
          // style = {{background: category.name === selectedCategory && 'rgba(255,255,255,0.1)'}} 
          key = {category.name}>
          <span style = {{marginRight: "15px"}}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}

    </Stack>
  )
}

export default Sidebar
