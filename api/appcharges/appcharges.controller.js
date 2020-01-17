'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const APPCHARGES = "application_charges";
module.exports = {
	charge: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			app_charges : data.app_charges
		};
		connection.query("INSERT INTO " + APPCHARGES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}