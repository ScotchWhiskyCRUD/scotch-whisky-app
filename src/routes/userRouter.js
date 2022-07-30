const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');
const userController = require('../controllers/userController');

const whiskyAPI = path.join(__dirname, '..', 'DB', 'api.json'); // serve path to whisky API file
const whiskies = JSON.parse(fs.readFileSync(whiskyAPI));

router.get('/api', (req, res) => res.status(200).send(whiskies));

router.get('/dashboard', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../../client/index.html'));
});

// register new user (create user acct)
router.post('/register', userController.createUser, (req, res) => {
    console.log('User creation was successful');
    return res.redirect('/dashboard');
});

// login existing user
router.post('/login', (req, res) => {
    console.log(req.body);
    return res.redirect('/dashboard');
});

// global error handler
router.use((err, req, res, next) => { // NEEDS ALL PARAMS, IN EXACT ORDER 
  console.log(`Global error handler caught error: ${err}`); 
  return res.status(400).send(err);
});


module.exports = router;