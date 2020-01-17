'use strict';
const express = require('express');
const controller = require('./servicecharges.controller');
const router = express.Router();

router.post('/', controller.service);


module.exports = router;