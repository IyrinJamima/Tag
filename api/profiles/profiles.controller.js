'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const PROFILE = "profile";
module.exports = {
	profile: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			mob_num : data.mob_num,
			email_id : data.email_id,
			location : data.location,
			course_level : data.course_level,
			school_name : data.school_name,
			course_completion_year : data.course_completion_year,
			board : data.board,
			subjects : data.subjects,
			marks : data.marks,
			work_experience : data.work_experience,
			employer_name : data.employer_name,
			designation : data.designation,
			department : data.department,
			current_job : data.current_job,
			education_stream : data.education_stream,
			course : data.course,
			specialization : data.specialization,
			mode_of_study : data.mode_of_study
		};
		connection.query("INSERT INTO " + PROFILE + " SET ?", pVal, function (err, results, fields) {
			if (err) {
				res.status(500).json({status: "Fail", Err: err})
			}
			else {
				res.status(200).json({result: data, Msg: "Successfully Added"})
			}
		})
	}
}