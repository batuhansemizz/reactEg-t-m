import React from 'react'
import Grid from '@mui/material/Grid';



//* xs={12} sm={6} md={4} lg={3} xl={2}
//* xs: mobile, sm: tablet, md: laptop, lg: desktop, xl: large desktop
function MUIGrid() {
  return (
    <div>
        <Grid container >
            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                1 item
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
               2 item
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
               3 item
            </Grid>
        </Grid>
    </div>
  )
}

export default MUIGrid