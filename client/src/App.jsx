import { Card, Grid, CardContent, TextField, Button } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <Card >
        <CardContent container spacing={2}>
          <Grid  item >
            <TextField label='First Name' variant='outlined'></TextField>
            <TextField label='Last Name' variant='outlined'></TextField>
            <Button variant='contained'>Send</Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default App
