#!/usr/bin/env node

const app = require('./server.js');
const port = 9050;
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
  res.json({message: 'Hello World!'});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
