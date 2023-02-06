const client = require("./connection.js");

module.exports = { 
    ins : (id,peso,serie,ripetizioni) =>{
      //console.log("Insert")
      client.query(`UPDATE scheda SET peso = '${peso}', serie = '${serie}', ripetizioni = '${ripetizioni}'  WHERE id = '${id}'`, (err, result, fields) => {
        if (err) throw err;
        console.log("Success");
      });
    },
    select: async() =>{
      //console.log("Select")
      const query = `SELECT * FROM scheda`;
      await client.connect();                                 // gets connection
      const { rows } = await client.query(query); // sends queries
      await client.end();                                     // closes connection
      return rows;
    }
  }