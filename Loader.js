const { Client } = require('pg');
const client = new Client({
  user: 'Alan',
  host: 'localhost',
  database: 'relatedItem',
  password: 'alanfu1337',
});

client.connect();

client.query('SELECT $1::text as message', ['Mellow World'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Prints Mellow World!
  client.end();
});
