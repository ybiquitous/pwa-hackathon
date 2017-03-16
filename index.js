const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello Node.js!' })
})

app.post('/api/data', (req, res) => {
  res.json(req.body)
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) throw err
  process.stdout.write(`> Ready on http://localhost:${port}\n`)
})
