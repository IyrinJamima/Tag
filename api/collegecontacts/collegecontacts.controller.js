'use strict';

const express = require('express');
const connection = require('./../../config/db.js');


const CONTACTS = "college_contact";

module.exports = {
	contact: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			mob_number : data.mob_number,
			landline_number : data.landline_number,
			email_id : data.email_id,
			address_line : data.address_line,
			city : data.city,
			state : data.state,
			zipcode : data.zipcode,
			web_url : data.web_url,
			map_link : data.map_link
		};
		connection.query("INSERT INTO " + CONTACTS + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully" });
			}
		})
	}
}





