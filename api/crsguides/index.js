'use strict';
const express = require('express');
const controller = require('./crsguides.controller');
const connection = require('./../../config/db.js');
const router = express.Router();
const multer = require('multer');
const GUIDES = "course_guide";
const cors = require('cors');


const FILE_PATH = 'uploads';

const upload = multer({
    dest: `${FILE_PATH}/`
});

router.post('/upload-avatar', upload.single('avatar'), async (req, res) => {
    try {
        const avatar = req.file;

        // make sure file is available
        if (!avatar) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.',
            });
        } else {
            // send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }

    } catch (err) {
        res.status(500).send(err);
    }
});



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/images/uploads')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// const upload = multer({storage:storage});
// router.post('/', upload.single('image'), (req, res) => {
// 	const upload = multer({storage:storage});

// 	res.json(req.body);
// 	res.json(req.files);
	// const data = req.body;
	// const  pVal = {
	// 	upload : data.upload
	// };
	// console.log(upload)
// 	connection.query("INSERT INTO " + GUIDES + " SET ?", pVal, function(err, results, fields) {
// 		if (err) {
// 			res.status(500).json({ status: "Fail", err : err });
// 		} else {
// 			console.log(upload)
// 			// res.json(req.body);
// 			res.status(200).json({result: data, Msg: "Successfully Uploaded" });
// 		}
// 	})
// })
// router.post('/', controller.img_upload);

module.exports = router;