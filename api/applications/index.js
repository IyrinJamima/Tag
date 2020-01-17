'use strict';
const express = require('express');
const controller = require('./applications.controller');
const router = express.Router();

router.post('/', controller.app);


module.exports = router;