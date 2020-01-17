'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const PARTNER = "partner";
module.exports = {
	partners: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			first_name : data.first_name,
			last_name : data.last_name,
			title : data.title,
			business_email : data.business_email,
			business_phone_num : data.business_phone_num,
			address : data.address,
			currently_working : data.currently_working,
			experience : data.experience,
			company_name : data.company_name,
			address_line : data.address_line,
			city : data.city,
			state : data.state,
			zip_code : data.zip_code,
			company_website : data.company_website,
			destination : data.destination,
			degree_name : data.degree_name,
			year_of_passing : data.year_of_passing,
			upload_aadhar : data.upload_aadhar,
			upload_tenth : data.upload_tenth,
			upload_twelveth : data.upload_twelveth,
			additional_info : data.additional_info,
			admin_notes : data.admin_notes
		};
		connection.query("INSERT INTO " + PARTNER + " SET ?", pVal, function (err, results, fields) {
			if(err) {
				res.status(500).json({status : "Fail", Err : err})
			}
			else {
				res.status(200).json({result: data, Msg: "Successfully Added"})
			}
		})
	}
}