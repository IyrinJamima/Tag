'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const FEE = "college_fees";

module.exports = {
	fee: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			college_name : data.college_name,
			course : data.course,
			fees_type : data.fees_type,
			specialization : data.specialization,
			exam_fee : data.exam_fee,
			tution_fee : data.tution_fee,
			library_fee : data.library_fee,
			total : data.total
		};
		connection.query("INSERT INTO " + FEE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}

