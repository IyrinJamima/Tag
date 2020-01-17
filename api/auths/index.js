'use strict';
const express = require('express');
const controller = require('./auths.controller');
const router = express.Router();

router.post('/', controller.auths);


module.exports = router;