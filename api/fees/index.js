'use strict';
const express = require('express');
const controller = require('./fees.controller');
const router = express.Router();

router.post('/', controller.fee);


module.exports = router;