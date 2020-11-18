const { query } = require('express')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/projects', (req, res) => {
  const query = req.query
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3", [query]])
})
app.post('/projects', (req, res) => {
  const body = req.body
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4",[body]])
})
app.put('/projects/:id', (req, res) => {
  const params = req.params
  return res.json(["Projeto 1 Editado", "Projeto 2 Editado", "Projeto 3 Editado", "Projeto 4 Editado", [params]])
})
app.delete('/projects/:id', (req, res) => {
  const params = req.params
  return res.json(["Projeto 1 Editado", "Projeto 2 Editado", "Projeto 3 Editado", [params]])
})

app.listen(3333, () => {
  console.log("back-end has started! 💜")
})