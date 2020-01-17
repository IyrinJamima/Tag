'use strict';
const express = require('express');
const controller = require('./roles.controller');
const router = express.Router();

router.post('/', controller.role);


module.exports = router;