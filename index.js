const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const router = require('./router')

const app = express()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/', router)

app.use((err, req, res, next) => {
  console.log("TCL: err", err)
  res.status(500).send({ Error: err.stack })
})
 
app.listen(port, () => console.log(`Escutando na porta ${port}`))