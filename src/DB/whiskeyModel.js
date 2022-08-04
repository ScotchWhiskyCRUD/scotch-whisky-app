// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// // var conString = process.env.ELEPHANTSQL_URL || "postgres://bdtvsysb:I2xYOILvFFgxmyixg3l5gIu90vt1ZEcm@rajje.db.elephantsql.com/bdtvsysb";
// var conString = "postgres://bdtvsysb:I2xYOILvFFgxmyixg3l5gIu90vt1ZEcm@rajje.db.elephantsql.com/bdtvsysb";
// var client = new pg.Client(conString);

// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//     client.end();
//   });
// });

// const { Pool } = require('pg');

// const PG_URI = 'postgres://bdtvsysb:I2xYOILvFFgxmyixg3l5gIu90vt1ZEcm@rajje.db.elephantsql.com/bdtvsysb';

// // create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI
// });


// // We export an object that contains a property called query,
// // which is a function that returns the invocation of pool.query() after logging the query
// // This will be required in the controllers to be the access point to the database
// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };
