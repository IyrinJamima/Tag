'use strict';
const express = require('express');
const controller = require('./articles.controller');
const router = express.Router();

router.post('/', controller.article);

module.exports = router;