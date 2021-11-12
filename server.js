'use strict';

const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRoute');

const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port);

console.log('Server up and running, listening on port: ' + port);