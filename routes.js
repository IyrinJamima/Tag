'use strict';
module.exports = function(app) {
	app.use('/api/v1/auths', require('./api/auths'));
	app.use('/api/v1/users', require('./api/users'));
	app.use('/api/v1/applications', require('./api/applications'));
	app.use('/api/v1/courses', require('./api/courses'));
	app.use('/api/v1/course_sel', require('./api/courses'));
	app.use('/api/v1/colleges', require('./api/colleges'));
	app.use('/api/v1/appcharges', require('./api/appcharges'));
	app.use('/api/v1/locations', require('./api/locations'));
	app.use('/api/v1/servicecharges', require('./api/servicecharges'));
	app.use('/api/v1/specializations', require('./api/specializations'));
	app.use('/api/v1/splcurriculums', require('./api/splcurriculums'));
	app.use('/api/v1/contact', require('./api/collegecontacts'));
	app.use('/api/v1/scholarship', require('./api/scholarships'));
	app.use('/api/v1/articles', require('./api/articles'));
	app.use('/api/v1/fees', require('./api/fees'));
	app.use('/api/v1/crscurriculums', require('./api/crscurriculums'));
	app.use('/api/v1/crseligibilities', require('./api/crseligibilities'));
	app.use('/api/v1/crsrecruiters', require('./api/crsrecruiters'));
	app.use('/api/v1/crsskills', require('./api/crsskills'));
	app.use('/api/v1/spleligibilities', require('./api/spleligibilities'));
	app.use('/api/v1/splrecruiters', require('./api/splrecruiters'));
	app.use('/api/v1/splskills', require('./api/splskills'));
	app.use('/api/v1/crsguides', require('./api/crsguides'));
	app.use('/api/v1/roles', require('./api/roles'));
	app.use('/api/v1/partners', require('./api/partners'));
	app.use('/api/v1/profiles', require('./api/profiles'));
	app.use('/api/v1/clg_sel', require('./api/colleges'));


};