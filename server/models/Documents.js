const mongoose = require('mongoose')
const Schema = mongoose.Schema
const documentSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)


