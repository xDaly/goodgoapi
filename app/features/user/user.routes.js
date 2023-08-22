const router = require("express").Router();
const user = require("./user.controller");

router.post("/signup", user.createShop);
router.post("/signin", user.signin);
module.exports = router;
