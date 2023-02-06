const client = require("./connection.js");

module.exports = { 
    ins : (id,peso,serie,ripetizioni) =>{
      //console.log("Insert")
      client.query(`UPDATE scheda SET peso = '${peso}', serie = '${serie}', ripetizioni = '${ripetizioni}'  WHERE id = '${id}'`, (err, result, fields) => {
        if (err) throw err;
        console.log("Success");
      });
    },
    select: () =>{return new Promise(async(resolve, reject) => {
      //console.log("Select")
      const query = `SELECT * FROM scheda`;
  try {
      await client.connect();                                 // gets connection
      const { rows } = await client.query(query); // sends queries
      resolve(rows);
  } catch (error) {
      console.error(error.stack);
  } finally {
      await client.end();                                     // closes connection
  }
    })
    }
  }