'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const ROLE = "roles"

module.exports = {
	role: (req, res) => {
		const data = req.body;
		var pVal = {
			id : data.id,
			role_name : data.role_name
		};
		connection.query("INSERT INTO " + ROLE + " SET ?", pVal, function (err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}
