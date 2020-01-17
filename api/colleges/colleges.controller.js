'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const COLLEGES = "college";
const CRITERIA = "college_eligibility";
const EVENTS = "college_events";
const EXAM = "college_exam";

module.exports = {
	clg: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			college_name : data.college_name,
			mob_number : data.mob_number,
			location : data.location,
			placement : data.placement,
			accreditation : data.accreditation,
			ownership : data.ownership,
			course_name : data.course_name,
			accredition : data.accredition,
			specialization : data.specialization,
			course_status : data.course_status,
			modeof_study : data.modeof_study,
			approval : data.approval,
			upload : data.upload
		};
		connection.query("INSERT INTO " + COLLEGES + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	clg_sel: (req, res) => {
		connection.query("SELECT * FROM college", function (err, results, fields) {
			if (err) {
				res.status(500).json({status: "Fail", Err: err})
			}
			else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"})
			}
		})
	},
	crs_sel: (req, res) => {
		connection.query("SELECT course_name,specialization from courses", function(err, results, fields) {
			if (err) {
				res.status(500).json({status: "Fail", Err: err})
			}
			else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"})
			}
		})
	},
	clg_eligibility: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			eligibility_criteria: data.eligibility_criteria,
			points : data.points
		};
		connection.query("INSERT INTO " + CRITERIA + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({status: "Fail", Err: err})
			}
			else {
				res.status(200).json({result: data, Msg: "Successfully Added"})
			}
		})
	},
	clg_events: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			title : data.title,
			description : data.description
		};
		connection.query("INSERT INTO " + EVENTS + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	clg_exams: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			exam_title : data.exam_title,
			exam_description : data.exam_description
		};
		connection.query("INSERT INTO " + EXAM + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	clg_fees: (req, res) => {
		const data = req.body;
		var pVal = {
			
		}
	}
}