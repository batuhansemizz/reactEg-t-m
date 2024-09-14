import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
function MUISelected() {
    const [country, setCountry] = useState('')
    console.log(country)
  return (
    <div>

        <FormControl sx={{width: '100px'}} variant='standard'>
            <InputLabel>Country</InputLabel>
            <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="ENG">England</MenuItem>
            </Select>
        </FormControl>
     


    </div>
  )
}

export default MUISelected