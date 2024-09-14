import React from 'react'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function MUButton() {
  return (
    <div>
        <div style={{display: 'flex', gap: '10px', marginTop: '10px' }}>
       <Button variant='text'> Kaydol </Button>
       <Button variant='contained'> Giriş Yap </Button>
       <Button variant='outlined'> Çıkış Yap </Button>
        </div>

        <div style={{display: 'flex', gap: '10px', marginTop: '10px' }}>
       <Button  color='success'> Kaydol </Button>
       <Button  color='error'> Çıkış Yap </Button>
       <Button  color='info'> Bilgi </Button>
       <Button  color='warning'> Uyarı </Button>
       <Button  color='secondary'> İkinci </Button>
       <Button variant='contained' color='primary'> Birinci </Button>
        </div>

        <div style={{display: 'flex', gap: '10px', marginTop: '10px' }}>
       <Button variant='contained' size='small'> Kaydol </Button>
       <Button variant='contained' size='medium'> Giriş Yap </Button>
       <Button variant='contained' size='large'> Çıkış Yap </Button>
        </div>

        <div style={{display: 'flex', gap: '10px', marginTop: '10px' }}>
       <Button variant='contained' size='small' startIcon='🚀'> Kaydol </Button> 
       <Button variant='contained' size='small' endIcon='🚀'> Çıkış Yap </Button>
       <Button variant='contained' size='small' startIcon='🚀' endIcon='🚀'> Çıkış Yap </Button>
       <Button variant='contained' color='success' size='small' startIcon={<AddCircleOutlineIcon />} > Çıkış Yap </Button>

        </div>
    </div>
  )
}

export default MUButton