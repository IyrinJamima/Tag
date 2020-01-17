'use strict';

const express = require('express');
const connection = require('./../../config/db.js');
const bcrypt = require('bcrypt');

const USER = "users";
module.exports = {
	auths: (req, res) => {
		const data = req.body;
		var pVal= {
			name : data.name,
			mob_num : data.mob_num,
			email_id : data.email_id,
			password : bcrypt.hashSync(data.password, 8),
			// password : data.password,
			nationality : data.nationality,
			city : data.city,
			// role : data.role
		};
		connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id  + "'", function (err, results, fields) {
			if (err) {
				console.log(err);
				res.status(500).json({ status: "Fail", Msg: "Something went wrong" });
			} else {
				if (results.length > 0) {
					res.status(200).json({status: "Fail", Msg: "Email already exists" });
				}else {
					connection.query("INSERT INTO " + USER + " SET ?", pVal, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", Msg: err });
						}else{
							res.status(200).json({ status: "Success", Msg: "Successfully Inserted"});
						}
					})
				}
			}
		})
		
	}
	
}