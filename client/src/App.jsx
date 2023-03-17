import { Card, Grid, CardContent, TextField } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <Card>
        <CardContent>
          <Grid item >
            <TextField label='First Name' variant='outlined'></TextField>
            <TextField label='Last Name' variant='outlined'></TextField>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default App
