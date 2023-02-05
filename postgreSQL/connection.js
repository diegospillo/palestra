const { Client } = require('pg')
const client = new Client({
  user: 'diegospillo',
  host: 'dpg-cfg1111a6gdma8lskmvg-a.frankfurt-postgres.render.com',
  database: 'palestra',
  password: 'htBgzUNs9G9GBCFC2nPexpa9j16uNkNP',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});