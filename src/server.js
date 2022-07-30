const path = require('path');
const express = require('express');
require('./DB/mongoose');

const cors = require('cors');

const userRouter = require('./routes/userRouter');

const port = 3000; // localhost
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static assets
app.use('/client', express.static(path.join(__dirname, '..', 'client')));

app.use(userRouter);



app.listen(port, () => {
    console.log('Server is up on port ' + port);
});