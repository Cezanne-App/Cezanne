const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');
const db = require('../db/index.js');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', router);

// Serve Static Files
app.use(express.static(__dirname + '/../client/dist'));

// Initialization
const port = process.env.PORT || 3000;
app.listen(port, (e) => {
  if (e) {
    console.error(e);
  } else {
    console.log(`Server listening in port ${port}...`);
  }
});