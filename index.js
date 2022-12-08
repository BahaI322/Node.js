const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});
app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});

const { Client } = require('pg');
const client = new Client();
client.connect();
client.query('SELECT $1::text as name', ['brianc'], (err, res) => {
  if (err) throw err;
  console.log(res);
  client.end();
});