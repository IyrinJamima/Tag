'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const CURRICULUM = "course_curriculum";

module.exports = {
	curriculum: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			title : data.title,
			content : data.content,
			duration : data.duration,
			course_name : data.course_name,
			specialization : data.specialization
		};
		connection.query("INSERT INTO " + CURRICULUM + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}