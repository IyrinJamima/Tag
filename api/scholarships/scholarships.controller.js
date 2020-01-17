'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SCHOLARSHIPS = "college_scholarship";

module.exports = {
	scholarship: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			title : data.title,
			description : data.description
		};
		connection.query("INSERT INTO " + SCHOLARSHIPS + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})

	}
}