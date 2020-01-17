'use strict';
const express = require('express');
const controller = require('./splskills.controller');
const router = express.Router();

router.post('/', controller.skill);


module.exports = router;