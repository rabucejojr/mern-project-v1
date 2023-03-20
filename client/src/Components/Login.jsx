import { Grid, Paper, TextField, Button } from '@mui/material'

const Login = () => {
  const paperStyle = { padding: 20, height: '40vh', width: 500 }
  const buttonStyle = { display: 'flex', flexDirection: 'column' }
  return (
    <>
      <Paper elevation={10} sx={paperStyle}>
        <Grid container spacing={2}>
          <TextField
            xs={6}
            variant='outlined'
            type='text'
            label='Username'
            sx={{ mb: 2 }}
            fullWidth
          ></TextField>
          <TextField
            xs={6}
            variant='outlined'
            type='password'
            label='Password'
            sx={{ mb: 2 }}
            fullWidth
          ></TextField>
          <Grid item>
            <Button variant='contained' color='primary'>
              Create
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary'>
              Read
            </Button>
            <Grid item>
              <Button variant='contained' color='primary'>
                Update
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary'>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Login
