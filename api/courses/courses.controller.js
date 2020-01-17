'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const COURSES = "courses";
module.exports = {
	course: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			upload : data.upload,
			college_name : data.college_name,
			location : data.location,
			course_name : data.course_name,
			specialization : data.specialization,
			course_type : data.course_type,
			course_duration : data.course_duration,
			admission_status : data.admission_status,
			course_fee : data.course_fee
		};
		connection.query("INSERT INTO " + COURSES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	course_sel: (req, res) => {
		connection.query("SELECT * FROM courses" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
	
}