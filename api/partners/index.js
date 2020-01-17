'use strict';
const express = require('express');
const controller = require('./partners.controller');
const router = express.Router();

router.post('/', controller.partners);


module.exports = router;