const Pool = require('pg').Pool

const pool = new Pool({
  user: 'diegospillo',
  host: 'dpg-cfg1111a6gdma8lskmvg-a',
  database: 'palestra',
  password: 'htBgzUNs9G9GBCFC2nPexpa9j16uNkNP',
  port: 5432,
})

const getAllScheda = (req, res) => {
  pool.query('SELECT * FROM scheda', (error, results) => {
      if (error) {
          throw error
      }
      res.status(200).json(results.rows)
  })
}

const getEsercizioScheda = (req, res) => {
  const { esercizio } = req.params

  pool.query('SELECT * FROM scheda', (error, results) => {
    if (error) {
        throw error
    }
    
    let schedaFiltrata = [...results.rows]
    if (esercizio) {
      schedaFiltrata = schedaFiltrata.filter((risp) => {
        return String(risp.esercizio) === esercizio
      })
      schedaFiltrata = schedaFiltrata.map((risp) => {
        const { id, nome, peso, img, serie, ripetizioni } = risp;
        return { id, nome, peso, img, serie, ripetizioni };
      })
    }

    res.render('sito', { uscita: schedaFiltrata, n_esercizio: esercizio, s_url:dominio })
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
  getAllScheda,
  getEsercizioScheda,
  updateUser
}