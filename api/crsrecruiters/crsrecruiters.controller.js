'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const RECRUITERS = "course_recruiters";

module.exports = {
	recruiter: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			job_title : data.job_title,
			job_content : data.job_content,
			recruiters_content : data.recruiters_content,
			recruiters_list : data.recruiters_list
		};
		connection.query("INSERT INTO " + RECRUITERS  + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}