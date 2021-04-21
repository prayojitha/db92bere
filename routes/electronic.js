var express = require("express");
var router = express.Router();
const electronic_controlers = require("../controllers/electronic");

/* GET electronic */
router.get("/", electronic_controlers.electronic_view_all_Page);
router.get("/electronicdetail", electronic_controlers.electronic_view_one_Page);
router.get("/electroniccreate", electronic_controlers.electronic_create_Page);
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo= req.originalUrl;
    res.redirect("/login");
}
router.get("/electronicupdate",secured, electronic_controlers.electronic_update_Page);
router.get("/electronicdelete", electronic_controlers.electronic_delete_Page);



module.exports = router;
