import express from 'express'
import bodyParser from 'body-parser'
import brand from './routes/brand'
import campain from './routes/campain'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('API AppAds v1'))
app.use('/brand', brand)
app.use('/campanias', campain)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))