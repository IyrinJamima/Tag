'use strict';
const express = require('express');
const controller = require('./specializations.controller');
const router = express.Router();

router.post('/', controller.spl);


module.exports = router;