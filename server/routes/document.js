//backend imports
const express = require('express')
const router = express.Router()
const {uploadDocument,getDocuments}= require('../controllers/documentController')

//GET ALL Documents
router.get('/', getDocuments)

//GET single Document
router.get('/:id', (req, res) => {
  res.json({ msg: `GET single document` })
})

//POST document
router.post('/',uploadDocument)

//DELETE document
router.delete('/:id', (req, res) => {
  res.json({ msg: `DELETE document` })
})

//UPDATE document
router.patch('/:id', (req, res) => {
  res.json({ msg: `UPDATE document` })
})

module.exports = router
