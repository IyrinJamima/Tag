'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SPL = "specialization";
module.exports = {
	spl: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			specialization_name : data.specialization_name,
			course_name : data.course_name
		};
		connection.query("INSERT INTO " + SPL + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}