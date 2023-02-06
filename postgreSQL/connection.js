const Pool = require('pg').Pool
const pool = new Pool({
  user: 'diegospillo',
  host: 'dpg-cfg1111a6gdma8lskmvg-a.frankfurt-postgres.render.com',
  database: 'palestra',
  password: 'htBgzUNs9G9GBCFC2nPexpa9j16uNkNP',
  port: 5432,
})

const getScheda = (req, res) => {
  pool.query('SELECT * FROM scheda', (error, results) => {
      if (error) {
          throw error
      }
      res.status(200).json(results.rows)
  })
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const {
      name,
      email
  } = request.body
  pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
          if (error) {
              throw error
          }
          res.status(200).send(`User modified with ID: ${id}`)
      }
  )
}

module.exports = {
  getScheda,
  updateUser
}