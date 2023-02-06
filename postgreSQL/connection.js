const Pool = require('pg').Pool
const dominio = process.env.URL || "http://localhost:3000";

const pool = new Pool({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT,
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

  pool.query('SELECT * FROM scheda ORDER BY $1',['id'], (error, results) => {
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

const getIdScheda = (req, res) => {
  const {id} = req.params;
  pool.query('SELECT * FROM scheda', (error, results) => {
    if (error) {
        throw error
    }
    let schedaFiltrata = [...results.rows]
    if (id) {
      schedaFiltrata = schedaFiltrata.filter((risp) => {
        return String(risp.id) === id;
      })
    }
    res.render('modifica',{val: schedaFiltrata, s_url:dominio})
  })
}

const updateScheda = (req, res) => {

  const {id} = req.params;
  const {peso,serie,ripetizioni} = req.query;
  
  pool.query(`UPDATE scheda SET peso = $1, serie = $2, ripetizioni = $3  WHERE id = $4`,[peso, serie, ripetizioni, id],(error, results) => {
          if (error) {
              throw error
          }
          res.render('risposta',{s_url:dominio});
      }
  )
}

module.exports = {
  getAllScheda,
  getEsercizioScheda,
  getIdScheda,
  updateScheda
}