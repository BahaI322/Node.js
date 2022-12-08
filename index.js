const express = require('express');
const app = express();
const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '1234',
  database: 'postgres',
});
client.connect();
app.get('/', (req, res) => {
  res.send({message: 'Hello WWW!'});
});
app.get('/todolist', (req, res) => {
  client.query('SELECT * FROM todolist', (err, result) => {
    if (err){
      res.send(err.message);
      return;
    }
    res.send(result.rows);
  });
});
app.listen(3000, () => {
  console.log('Application listening on port 3000!');
});