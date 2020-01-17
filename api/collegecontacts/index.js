'use strict';
const express = require('express');
const controller = require('./collegecontacts.controller');
const router = express.Router();

router.post('/', controller.contact);


module.exports = router;