import React from 'react'
import {Grid,Typography,Paper} from '@mui/material'
const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ height: '100vh', p:2 }}>
            <Typography variant='h6'>Widget 1</Typography>
            {/* <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet elit ut nibh varius tempus. Ut euismod sapien sed dui
              facilisis, a fermentum eros bibendum. Suspendisse vitae dui
              euismod, hendrerit nisl vitae, malesuada metus. Nam consequat
              velit in nibh fringilla molestie.
            </Typography> */}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
