'use strict';
const express = require('express');
const controller = require('./profiles.controller');
const router = express.Router();

router.post('/', controller.profile);


module.exports = router;