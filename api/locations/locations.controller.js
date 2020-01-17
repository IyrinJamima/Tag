'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const LOCATIONS = "location";
module.exports = {
	loc: (req, res) => {
		const data = req.body;
		var pVal = {
			user_id : data.user_id,
			city : data.city
		};
		connection.query("SELECT * FROM " + LOCATIONS + " WHERE city = '" + data.city +"'", function (err, results, fields) {
		    if (err) {
		      res.status(500).json({ errors: err});
		    }
		    else {
		      if (results.length > 0) {
		        connection.query("UPDATE " + LOCATIONS + " SET city = '" + data.city + "' WHERE city = '" + data.city +"'", function(err, result) {
		          if(err){
		            console.log(err)
		            res.status(500).json({errors: err})
		          }
		          else{
		            res.json({ result: "Updated Successfully" })
		          }
		        })
		      } else {
					connection.query("INSERT INTO " + LOCATIONS + " SET ?", pVal, function(err, results, fields) {
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