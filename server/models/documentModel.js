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
    desc: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      default: Date,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Document', documentSchema)
