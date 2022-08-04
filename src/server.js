// requiring the path
const path = require('path');

// calling express library
const express = require('express');
require('./DB/mongoose');

// const cors = require('cors');

// invoking express library
const app = express();

// path to take us to the router
const userRouter = require('./routes/userRouter');
// const whiskeyRouter = require('./routes/whiskeyRouter');

// port we are listening too
const port = 3000; // localhost


//Cross-Origin Resource Sharing for API
// app.use(cors());

// method in express to recognize incoming request as a json object
app.use(express.json());

// for our inputs to recognize incoming request objects as strings or arrays
app.use(express.urlencoded({ extended: true }));

// serve static assets
app.use('/client', express.static(path.join(__dirname, '..', 'client')));


//serve SQL pathway
// app.use('/whiskeys', whiskeyRouter);

///serve user pathway
app.use(userRouter);

// start server
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});