const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Home Page'))

app.get('/about', (req, res) => res.send('About page '))

app.get('/download', (req, res) => res.send('Download   page '))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





 