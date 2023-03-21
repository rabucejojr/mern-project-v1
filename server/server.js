const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase',{useNewUrlParser:true, useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open',()=>{console.log('MongoDB connected!')});

app.listen(port,()=>{console.log(`Server running in port ${port}`)})

app.use('/', routes);

// FOR CHECKING MONGODB CONNECTION
// mongoose.connection.on('open', () => {
//   console.log('MongoDB connected!')
// })

// mongoose.connection.on('error', (err) => {
//   console.log(`MongoDB connection error: ${err}`)
// })


