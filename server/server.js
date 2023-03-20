const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017')
