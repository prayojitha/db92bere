var express = require("express");
var router = express.Router();
const electronic_controlers = require("../controllers/electronic");

/* GET electronic */
router.get("/", electronic_controlers.electronic_view_all_Page);
router.get("/electronicdetail", electronic_controlers.electronic_view_one_Page);
router.get("/create", electronic_controlers.electronic_create_Page);

module.exports = router;
