'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SKILLS = "spl_skill";

module.exports = {
	skill: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			req_skill : data.req_skill,
			points : data.points
		};
		connection.query("INSERT INTO " + SKILLS  + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}