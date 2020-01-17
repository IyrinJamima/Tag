'use strict';
const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

router.post('/', controller.login);
router.put('/forget_pwd', controller.forget_pwd);
router.post('/verify_otp',controller.verify_otp);


module.exports = router;