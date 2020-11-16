const express = require('express')

const app = express()

app.get('/mensagem', (req, res) => {
  return res.json({message: 'Hello World'})
})

app.listen(3333)