import express from 'express'
import marcas from '../data/brandJSON'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send(marcas)
})



module.exports = router