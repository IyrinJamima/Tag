'use strict';
const express = require('express');
const controller = require('./appcharges.controller');
const router = express.Router();

router.post('/', controller.charge);


module.exports = router;