// // const pg = require('pg');
// // const queries = require("../controllers/queries.js")

// // const getWhiskeys = (req, res) => {
// //   console.log('whiskey controller running')
// //   client.query(queries.getWhiskeys, (err, results) =>
// //     {if (err) {
// //       console.log("query failed")
// //     } else {
// //       res.status(200).json(results)
// //       console.log(res.rows[0])
// //     }
// //    })}

// // module.exports = {getWhiskeys};

const db = require('../DB/whiskeyModel');

// creating a whiskeyController object to add our methods
const whiskeyController = {};

// middleware to get whiskeys 
whiskeyController.getWhiskeys = (req, res, next) => {
  const getQuery = 'SELECT * FROM scotches'

  db.query(getQuery)
   .then(data => {
    res.locals.whiskeys = data.rows;
    return next();
   })
   .catch(err => next({
    log: 'whiskeyController.getWhiskeys',
    message: {err: 'Invalid database query'}
   }))

 };

 whiskeyController.addWhiskeys = async (req, res, next) => {
  try {
    console.log('WHISKEY CONTROLLER');
    console.log('this is req.body ', req.body);
    const addQuery = 'INSERT INTO scotches'
    res.locals.stuff = await req.body;
    return next()
  }
  catch (err){
    console.log('error in controller');
  }
  
 }

 whiskeyController.deleteWhiskeys = (req, res, next) => {
  const deleteQuery = 'DELETE FROM scotches WHERE id `${}`'
 }


module.exports = whiskeyController;