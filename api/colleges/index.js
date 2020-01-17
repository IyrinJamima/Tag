'use strict';
const express = require('express');
const controller = require('./colleges.controller');
const router = express.Router();

router.post('/', controller.clg);
router.get('/', controller.clg_sel);
router.get('/crs_sel',controller.crs_sel);
router.post('/clg_eligibility', controller.clg_eligibility);
router.post('/clg_events', controller.clg_events);
router.post('/clg_exams', controller.clg_exams);


module.exports = router;