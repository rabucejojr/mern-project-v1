//backend imports
const express = require('express')
const router = express.Router()

//GET ALL Documents
router.get('/', (req, res) => {
  res.json({ msg: 'GET all documents' })
})

//GET single Document
router.get('/:id', (req, res) => {
  res.json({ msg: `GET single document` })
})

//POST document
router.post('/', (req, res) => {
  res.json({ msg: `POST new document` })
})

//DELETE document
router.delete('/:id', (req, res) => {
  res.json({ msg: `DELETE document` })
})

//UPDATE document
router.patch('/:id', (req, res) => {
  res.json({ msg: `UPDATE document with id ${id}` })
})

module.exports = router
