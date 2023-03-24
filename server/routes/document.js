//backend imports
const express = require('express')
const router = express.Router()
const {uploadDocument,getDocuments,getDocument,deleteDocument,updateDocument}= require('../controllers/documentController')

//GET ALL Documents
router.get('/', getDocuments)

//GET single Document
router.get('/:id',getDocument)

//POST document
router.post('/',uploadDocument)

//DELETE document
router.delete('/:id',deleteDocument)

//UPDATE document
router.patch('/:id',updateDocument)

module.exports = router
