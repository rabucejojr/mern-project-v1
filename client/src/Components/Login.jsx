import { Grid, Paper, TextField, Button } from '@mui/material'

const Login = () => {
  const paperStyle = { padding: 20, height: '40vh', width: 350 }

  return (
    <>
      <Grid sx={{ alignItems: 'center' }}>
        <Paper elevation={0} sx={paperStyle}>
          <TextField
            xs={12}
            variant='outlined'
            type='text'
            label='Username'
            sx={{ mb: 2 }}
            fullWidth
          ></TextField>
          <TextField
            xs={12}
            variant='outlined'
            type='password'
            label='Password'
            sx={{ mb: 2 }}
            fullWidth
          ></TextField>
          <Grid sx={{ align: 'center' }}>
            <Button variant='contained' color='primary' fullWidth>
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default Login
