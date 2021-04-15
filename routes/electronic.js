var express = require("express");
var router = express.Router();
const electronic_controlers = require("../controllers/electronic");

/* GET electronic */
router.get("/", electronic_controlers.electronic_view_all_Page);
router.get("/electronicdetail", electronic_controlers.electronic_view_one_Page);
router.get("/electroniccreate", electronic_controlers.electronic_create_Page);
router.get("/electronicupdate", electronic_controlers.electronic_update_Page);
router.get("/electronicdelete", mobile_controlers.mobile_delete_Page);

module.exports = router;
