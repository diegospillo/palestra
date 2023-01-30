const express = require('express')
const app = express()

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')
console.log("1");
/*var scheda = require('./mysql/query.js');
const dominio = "https://palestra.onrender.com";*/
console.log("2");
app.get('/', (req, res) => {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "palestra"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    res.end("connesso");
    //console.log("Connected!");
  });
 /* scheda.select().then((data) => {
    res.render('sito', { uscita: data, n_esercizio: "0",s_url:dominio });
  })*/

  //res.end("ciao cuore");

})

app.get('/scheda/:esercizio', (req, res) => {
 /* const { esercizio } = req.params

  scheda.select().then((data) => {
    let schedaFiltrata = [...data]
    if (esercizio) {
      schedaFiltrata = schedaFiltrata.filter((risp) => {
        return String(risp.esercizio) === esercizio
      })
      schedaFiltrata = schedaFiltrata.map((risp) => {
        const { id, nome, peso, img, serie, ripetizioni } = risp;
        return { id, nome, peso, img, serie, ripetizioni };
      })
    }
    /*if(schedaFiltrata.length<1){
      return res.status(404).json({messaggio:"non trovato", code:404})
    }*//*
    res.render('sito', { uscita: schedaFiltrata, n_esercizio: esercizio, s_url:dominio })
  })*/
})

app.get('/scheda/modifica/:id', (req, res) => {
 /* const {id} = req.params;
  scheda.select().then((data) => {
    let schedaFiltrata = [...data]
    if (id) {
      schedaFiltrata = schedaFiltrata.filter((risp) => {
        return String(risp.id) === id;
      })
    }
    res.render('modifica',{val: schedaFiltrata, s_url:dominio})
  })
  */
})

app.get('/scheda/modifica/:id/send', (req, res) => {
 /* const {id} = req.params;
  const {peso,serie,ripetizioni} = req.query;
  scheda.ins(id,peso,serie,ripetizioni);
  res.render('risposta',{s_url:dominio});*/
})

app.listen(process.env.PORT || 3000, () =>{
  console.log("listen")
})