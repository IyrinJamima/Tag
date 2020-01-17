'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const connection = require('./config/local.env.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

require('./routes')(app);

/* start server */
let port = 8000
app.listen(port, () => {
	console.log('Running on localhost:'+port)
	defaultErrorHandler: false
});

exports = module.exports = app;