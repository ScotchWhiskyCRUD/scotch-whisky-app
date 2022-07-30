const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = 3000; // localhost


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));