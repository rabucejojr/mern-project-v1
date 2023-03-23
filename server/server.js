// backend imports
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const documentRoutes = require('./routes/document')
const mongoose = require('mongoose')
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//route use
app.use('/api/documents', documentRoutes)

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for req
    app.listen(port, () => {
      console.log(`running in port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
