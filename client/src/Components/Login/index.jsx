import { Grid, Paper, TextField, Button } from '@mui/material'

const Login = () => {
  const paperStyle = { padding: 20, height: '40vh', width: 350 }
  const handleCreate=(e)=>{
    e.preventDefault();
    const data = {user,pass};
    
  }

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
        </Grid>
        <Grid sx={{ display: 'flex',justifyContent:'space-around'}}>
          <Button variant='contained' color='primary'>
            Create
          </Button>
          <Button variant='contained' color='primary'>
            Read
          </Button>
          <Button variant='contained' color='primary'>
            Update
          </Button>
          <Button variant='contained' color='primary'>
            Delete
          </Button>
        </Grid>
      </Paper>
    </>
  )
}

export default Login
