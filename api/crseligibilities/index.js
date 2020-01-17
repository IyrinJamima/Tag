'use strict';
const express = require('express');
const controller = require('./crseligibilities.controller');
const router = express.Router();

router.post('/', controller.eligibility);


module.exports = router;