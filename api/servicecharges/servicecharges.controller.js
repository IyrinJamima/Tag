'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SERVICE = "service_charge";
module.exports = {
	service: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			college_name : data.college_name,
			service_charge : data.service_charge
		};
		connection.query("SELECT * FROM " + SERVICE + " WHERE college_name = '" + data.college_name +"'", function (err, results, fields) {
		    if (err) {
		      res.status(500).json({ errors: err});
		    }
		    else {
		      if (results.length > 0) {
		        connection.query("UPDATE " + SERVICE + " SET ? WHERE college_name = '" + data.college_name +"'", pVal,  function(err, result) {
		          if(err){
		            console.log(err)
		            res.status(500).json({errors: err})
		          }
		          else{
		            res.json({ result: "Updated Successfully" })
		          }
		        })
		      } else {
					connection.query("INSERT INTO " + SERVICE + " SET ?", pVal, function(err, results, fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						} else {
							res.status(200).json({result: data, Msg: "Successfully Added" });
						}
					})
		      }
		
			}
			
		});
	}
}