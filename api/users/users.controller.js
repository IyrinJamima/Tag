'use strict';

const express = require('express');
// const Cryptr = require('cryptr');
// const AWS = require('aws-sdk');
// const sns = new AWS.SNS();
// var cloudwatchlogs = new AWS.CloudWatchLogs({region: 'eu-central-1'});


const Auth = require('../auths/auths.controller')
const connection = require('./../../config/db.js');
const config = require('./../../config/local.env.js');
// const awsconfig = require('./../../config/aws.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const USER = "users"

module.exports = {
	login: (req, res) => {
		const data = req.body;
		var pVal = {
			email_id : data.email_id,
			password : data.password
		};
		
		connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id +"'", function (err, user, results) {
			if(err){
			    return res.status(401).json({message : err});
			}
			console.log(data.password)
			// if(data.password && user.password > 0)
				var isPasswordValid = bcrypt.compareSync(data.password, user[0].password);
			console.log(data.password)
			console.log(user[0].password)
			if(!isPasswordValid){
			                     return res.status(401).json({auth : false, token : null, message : "Not Authorised User"});
			               }else{
			                     let payload = {
			                         user_id : user._id,
			                         email_id : user.email_id
			                     }
			                     let token = jwt.sign(payload, config.secrets.session,{expiresIn : config.secrets.expiresIn});
			                    return res.status(200).json({auth : true, token : token, message : "User Logged In Successfully"});
			              }
		 })
    },
      forget_pwd: (req, res) => {
      	const data  = req.body;
      	var pVal = {
      		email_id : data.email_id,
      		password : data.password
      	};
      	connection.query("SELECT * FROM " + USER + " WHERE email_id = '" + data.email_id +"'", function(err, user, results) {
      		if(err) {
      			return res.status(401).json({message : err});
      		}
      		else {
      			if (results.length > 0) {
      				connection.query("UPDATE " + USER + " SET   password = '" + bcrypt.hashSync(data.password, 8) + "' WHERE email_id = '" + data.email_id +"'", function(err, user, results) {
      					if(err){
      						res.status(500).json({errors: err})
      					}
      					// 	var isPasswordValid = bcrypt.compareSync(data.password, user[0].password);
      					// console.log(data.password)
      					// console.log(user[0].password)
      					// if(!isPasswordValid){
      					//                      return res.status(401).json({auth : false, token : null, message : "Not Authorised User"});
      					//                }else{
      					                     let payload = {
      					                         user_id : user.id,
      					                         email_id : user.email_id
      					                     }
      					                     let token = jwt.sign(payload, config.secrets.session,{expiresIn : config.secrets.expiresIn});
      					                    return res.status(200).json({auth : true, token : token, message : "User updated Successfully"});
      					              
      					
      				})
      			}
      		}
      	})
      },
      verify_otp: (req, res) => {
      	const data = req.body;
      		let user_id = data.user_id;
      		let otp = data.otp
      	
      	let sql = `SELECT * FROM	 users WHERE  otp=? AND user_id=?` 
      	connection.query(sql,[otp,user_id], function(err, user, fields) {
      		if (err) {
      			res.status(500).json({ status: "Fail", Err: err})
      		} else {
      			 let payload = {
      			     userid : user.id,
      			     otp : user.otp
      			 }
      			 let token = jwt.sign(payload, config.secrets.session,{expiresIn : config.secrets.expiresIn});
      			return res.status(200).json({auth : true, token : token, message : "Success"});
      			      			
      		}
      	})
      },

}


				// 	if(err) {
		// 		res.status(500).json({ status: "Fail", Msg: "Something went wrong" });
		// 	} else {
		// 		if(results.length > 0) {
		// 			if(data.password == results[0].password) {
		// 				// var token=jwt.sign(results[0],process.env.SECRET_KEY,{
		// 				//                     expiresIn:5000
		// 				//                 });
		// 				// res.json({
		// 				//                     status:true,
		// 				//                     token:token
		// 				//                 })
		// 				res.status(200).json({ status: "Success", Msg: "Login successful" });
						
		// 			} else {
		// 				res.status(500).json({ status: "Fail", Msg: "Email and password does not match" });
		// 			}
		// 		} else {
		// 			res.status(500).json({status: "Fail", Msg: "Email does not exists" });
		// 		}
		// 	}
		// })


	// 	AWS.config.update({
	// 	  accessKeyId: 'AKIAWBAGBEP4Z54Y2IGL',
	// 	  secretAccessKey: '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',
	// 	  region: 'Virginia'
	// 	});
	// 	AWS.config.region = awsconfig.aws.region;
	// 	AWS.config.credentials = {
	// 	    accessKeyId: awsconfig.credentials.accessKeyId,
	// 	    secretAccessKey: awsconfig.credentials.secretAccessKey
	// 	}
	// 	console.log(awsconfig.aws.region)
	// 	sns.createPlatformEndpoint({
	// 	  PlatformApplicationArn: '{arn:aws:sns:us-east-1:414477001721:app/ADM/Tag}',
	// 	  Token: '{23c7e17f-4da7-4be2-a110-6e5f57c5d9ce}'
	// 	}, function(err, data) {
	// 	  if (err) {
	// 	    console.log(err.stack);
	// 	    return;
	// 	  }

	// 	  var endpointArn = data.EndpointArn;

	// 	  var payload = {
	// 	    default: 'Hello World',
	// 	    APNS: {
	// 	      aps: {
	// 	        alert: 'Hello World',
	// 	        sound: 'default',
	// 	        badge: 1
	// 	      }
	// 	    }
	// 	  };

	// 	  // first have to stringify the inner APNS object...
	// 	  payload.APNS = JSON.stringify(payload.APNS);
	// 	  // then have to stringify the entire message payload
	// 	  payload = JSON.stringify(payload);

	// 	  console.log('sending push');
	// 	  sns.publish({
	// 	    Message: payload,
	// 	    MessageStructure: 'json',
	// 	    TargetArn: endpointArn
	// 	  }, function(err, data) {
	// 	    if (err) {
	// 	      console.log(err.stack);
	// 	      return;
	// 	    }

	// 	    console.log('push sent');
	// 	    console.log(data);
	// 	  });
	// 	});
	// 