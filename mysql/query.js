const con = require("./connection.js");

module.exports = { 
    ins : (id,peso,serie,ripetizioni) =>{
      //console.log("Insert")
      con.query(`UPDATE scheda SET peso = '${peso}', serie = '${serie}', ripetizioni = '${ripetizioni}'  WHERE id = '${id}'`, (err, result, fields) => {
        if (err) throw err;
        console.log("Success");
      });
    },
    select: () =>{return new Promise((resolve, reject) => {
      //console.log("Select")
      con.query("SELECT * FROM scheda", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
          resolve(result);
      });
    })
    }
  }