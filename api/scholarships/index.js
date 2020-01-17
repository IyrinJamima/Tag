'use strict';
const express = require('express');
const controller = require('./scholarships.controller');
const router = express.Router();

router.post('/', controller.scholarship);

module.exports = router;