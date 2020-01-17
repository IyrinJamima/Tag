'use strict';
const express = require('express');
const controller = require('./spleligibilities.controller');
const router = express.Router();

router.post('/', controller.eligibility);


module.exports = router;