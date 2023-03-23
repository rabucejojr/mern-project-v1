//backend imports
const express = require('express')
const router = express.Router()
const {uploadDocument,getDocuments,getDocument}= require('../controllers/documentController')

//GET ALL Documents
router.get('/', getDocuments)

//GET single Document
router.get('/:id',getDocument)

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
