'use strict';
const express = require('express');
const controller = require('./locations.controller');
const router = express.Router();

router.post('/', controller.loc);


module.exports = router;