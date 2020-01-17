'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const CURRICULUM = "spl_curriculum";
module.exports = {
	curriculum: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			curriculum_title : data.curriculum_title,
			curriculum_content : data.curriculum_content,
			duration : data.duration
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