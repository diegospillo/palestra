const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/*DEPLOY
git add .
git commit -m "First Commit"
git push origin main
*/

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

const client = require("./postgreSQL/connection.js");

app.get('/', client.getAllScheda);


app.get('/scheda/:esercizio', client.getEsercizioScheda);

app.get('/scheda/modifica/:id', client.getIdScheda)

app.get('/scheda/modifica/:id/send', client.updateScheda)

app.listen(process.env.PORT || 3000, () =>{
  console.log("listen")
})
