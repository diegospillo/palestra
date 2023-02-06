const client = require("./connection.js");

module.exports = { 
    ins : (id,peso,serie,ripetizioni) =>{
      //console.log("Insert")
      client.query(`UPDATE scheda SET peso = '${peso}', serie = '${serie}', ripetizioni = '${ripetizioni}'  WHERE id = '${id}'`, (err, result, fields) => {
        if (err) throw err;
        console.log("Success");
      });
    },
    select: () =>{return new Promise((resolve, reject) => {
        client.query('SELECT * FROM scheda', (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              console.log(res)
            }
          })
    })
    }
  }