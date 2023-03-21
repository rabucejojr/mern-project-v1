const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017/mydatabase')
// const mongoose = require('mongoose')

mongoose.connection.on('open', () => {
  console.log('MongoDB connected!')
})

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`)
})
