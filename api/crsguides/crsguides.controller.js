'use strict';

const express = require('express');
const connection = require('./../../config/db.js');
// const multer = require('multer');


const GUIDES = "course_guide";

module.exports = {
	img_upload: (req, res) => {
		const data = req.file;
		var pVal = {
			user_id : data.user_id,
			upload : data.upload
		}
		console.log(upload)
		connection.query("INSERT INTO " + GUIDES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				console.log(upload)
				res.status(200).json({result: data, Msg: "Successfully Uploaded" });
			}
		})
	}	
}
