const router = require("express").Router();
const categoriesController = require("./categories.controller");

router.post("/create", categoriesController.create);
module.exports = router;




