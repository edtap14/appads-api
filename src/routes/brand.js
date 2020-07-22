import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  const marcas = [
    {
    name: "Chevrolet",
    text:"Chevrolet México",
    campaniasAct: 2,
    campaniasEnding: 3,
    campaniasTot:5,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Chevrolet",
    },
    {
    name: "Adidas",
    text:"Adidas México",
    campaniasAct:5,
    campaniasEnding: 0,
    campaniasTot:5,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Adidas",
    },
    {
    name: "Grupo Bimbo",
    text:"Bimbo México",
    campaniasAct:4,
    campaniasEnding: 10,
    campaniasTot:14,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Bimbo",
    },
    {
    name: "Coca-Cola",
    text:"Femsa México",
    campaniasAct:4,
    campaniasEnding: 4,
    campaniasTot: 8,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Coca-Cola",
    },
    {
    name: "Viva Aerobus",
    text:"Viva Aerobus",
    campaniasAct: 2,
    campaniasEnding: 1,
    campaniasTot: 3,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Viva-Aerobus",
    },
    {
    name: "Hasbro",
    text:"Hasbro Toys",
    campaniasAct:0,
    campaniasEnding: 2,
    campaniasTot: 2,
    img:"https://via.placeholder.com/150/FFFFFF/000000/?text=Hasbro",
    },
  ]
  res.send(marcas)
})



module.exports = router