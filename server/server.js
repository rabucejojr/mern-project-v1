// backend imports
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT 
//express app
const app = express()

//routes
app.get('/',(req,res)=>{
    res.status(200).json({msg:'welcome'})
})

//listen for req
app.listen(port,()=>{
    console.log(`running in port ${port}`)
})

