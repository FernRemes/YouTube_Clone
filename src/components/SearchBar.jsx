import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

function SearchBar() {
    const [searchTerm , setSearchTerm] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(searchTerm) {
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }
  return (
    <Paper 
        component = "form" 
        onSubmit = {handleSubmit} 
        sx = {{
            borderRadius: 20,
            border: '1px solid gray',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
            backgroundColor: '#0f0f0f',
            display: 'flex',
            alignItems: 'center',
            maxWidth: 400

        }}
    >
        <input 
        className="search-bar" 
        placeholder="Search..." 
        value = {searchTerm} 
        onChange={(e) => {setSearchTerm(e.target.value)}} 
        style={{ 
            backgroundColor: '#0f0f0f', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            flex: 1,
            outline: 'none',
            }}
        />            
            <IconButton type = "submit" sx = {{ p:'10px', color: 'gray'}}>
                <Search/>
            </IconButton>
        
    </Paper>
  )
}

export default SearchBar
