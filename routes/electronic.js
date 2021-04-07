var express = require('express');
var router = express.Router();
const electronic_controlers = require("../controllers/electronic");

/* GET electronic */
router.get('/', electronic_controlers.mobile_view_all_Page);

module.exports = router;
