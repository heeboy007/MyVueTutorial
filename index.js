const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.use('/ex', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});