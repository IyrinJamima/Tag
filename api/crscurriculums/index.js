'use strict';
const express = require('express');
const controller = require('./crscurriculums.controller');
const router = express.Router();

router.post('/', controller.curriculum);


module.exports = router;