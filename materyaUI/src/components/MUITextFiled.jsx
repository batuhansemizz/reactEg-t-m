import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
function MUITextFiled() {
  return (
    <div style={{display: 'flex', gap: '50px', marginTop: '60px', flexDirection: 'column' , width: '50%'}}>
        <TextField label="isim" variant='outlined' placeholder='Lütfen isminizi giriniz'/>
        <TextField label="isim" variant='filled'/>
        <TextField label="isim" variant='filled' helperText='Lütfen şifrenizi giriniz'/>
        <TextField label="isim" variant='filled' helperText='Lütfen isminizi giriniz'/>
        <TextField label="isim" variant='outlined' disabled/>
         <TextField label="isim" variant='standard' color='dark' placeholder='Lütfen isminizi giriniz'/>
        <TextField label="isim" variant='outlined' InputProps={{readOnly: true}} />
        <TextField label="isim" variant='outlined' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}} />
        <TextField label="isim" variant='outlined' InputProps={{endAdornment: <InputAdornment position='end'>$</InputAdornment>}} />
        <TextField label="isim" variant='outlined' InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}} />
        <TextField  variant='outlined' InputProps={{startAdornment: <InputAdornment position='start'><PersonIcon/></InputAdornment>}} />

       


       
    </div>
  )
}

export default MUITextFiled