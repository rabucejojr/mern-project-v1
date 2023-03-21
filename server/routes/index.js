const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({message:'Create Data'})
})
router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post Data' })
})
router.update('/:id', (req, res) => {
  res.status(200).json({ message: 'Update Data' })
})
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete Data' })
})


module.exports =router;