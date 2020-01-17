'use strict';
const express = require('express');
const controller = require('./courses.controller');
const router = express.Router();

router.post('/', controller.course);
router.get('/', controller.course_sel);


module.exports = router;