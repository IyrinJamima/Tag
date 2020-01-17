'use strict';
const express = require('express');
const controller = require('./splrecruiters.controller');
const router = express.Router();

router.post('/', controller.recruiter);


module.exports = router;