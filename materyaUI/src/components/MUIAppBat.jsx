import React from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MUIAppBat() {

 const  [anchorEl, setAnchorEl] = useState(null)

 const open = Boolean(anchorEl);
 
 const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
 }
 const handleClose = () => {
    setAnchorEl(null)
 }
 const closeMenu = () => {
    setAnchorEl(null)
 }
  return (
    <Box>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr:2}}>
                    <MenuIcon sx={{ color:'turquoise' }}/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>MUI</Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Login</Button>
                    <Button color='inherit'>Register</Button>
                    <Button color='inherit'>Logout</Button>
                    <Button color='inherit' onClick={openMenu}>Contact</Button>
                    <Button color='inherit'>About</Button>
                </Stack>
                    <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
                    <MenuItem onClick={handleClose}>Seçenek 1</MenuItem>
                    <MenuItem onClick={handleClose}>Seçenek 2</MenuItem>
                    <MenuItem onClick={handleClose}>Seçenek 3</MenuItem>
                    <MenuItem onClick={handleClose}>Seçenek 4</MenuItem>
                    <MenuItem onClick={handleClose}>Seçenek 5</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default MUIAppBat