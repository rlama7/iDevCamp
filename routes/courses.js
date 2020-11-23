const express = require('express');
const { getCourses } = require('../controllers/courses');

// getBootcamp,
// createBootcamp,
// updateBootcamp,
// deleteBootcamp,
// getBootcampsInRadius,

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);

module.exports = router;