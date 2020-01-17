'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const CRITERIA = "spl_eligibility";


module.exports = {
	eligibility: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			eligibility_criteria : data.eligibility_criteria,
			points : data.points
		};
		connection.query("INSERT INTO " + CRITERIA  + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}
