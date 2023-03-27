const Document = require('../models/documentModel')
const mongoose = require('mongoose')

//GET ALL DOCUMENTS
const getDocuments = async (req, res) => {
  const documents = await Document.find({}).sort({ createAt: -1 })
  res.status(200).json(documents)
}

//GET A SINGLE DOCUMENT
const getDocument = async (req, res) => {
  const { id } = req.params
  //check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id provided' })
  }
  const document = await Document.findById(id)
  if (!document) {
    return res.status(404).json({ error: 'Document not found' })
  }
  res.status(200).json(document)
}
// CREATE/UPLOAD NEW DOCUMENT
const uploadDocument = async (req, res) => {
  const { filename, path, desc, date } = req.body

  let emptyFields = []

  //CHECK FOR EMPTY FIELDS
  if (!filename) {
    emptyFields.push('filename')
  }
  if (!path) {
    emptyFields.push('path')
  }
  if (!desc) {
    emptyFields.push('desc')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'PLease fill in all fields' }, emptyFields)
  }

  //add document to db
  try {
    const document = await Document.create({ filename, path, desc, date })
    res.status(200).json(document)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// DELETE A DOCUMENT
const deleteDocument = async (req, res) => {
  const { id } = req.params
  //check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id provided' })
  }
  const document = await Document.findOneAndDelete({ _id: id })
  if (!document) {
    res.status(404).json({ error: 'Document not found' })
  }
  res.status(200).json(document)
}

//UPDATE A DOCUMENT
const updateDocument = async (req, res) => {
  const { id } = req.params
  //check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id provided' })
  }
  const document = await Document.findOneAndUpdate({ _id: id }, { ...req.body })
  if (!document) {
    res.status(404).json({ error: 'Document not found' })
  }
  res.status(200).json(document)
}

module.exports = {
  uploadDocument,
  getDocuments,
  getDocument,
  deleteDocument,
  updateDocument,
}
