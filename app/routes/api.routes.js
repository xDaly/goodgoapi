const router = require('express').Router();
const userRoutes = require('../features/user/user.routes');
const categoriesRoutes = require('../features/categories/categories.routes');


router.use('/user', userRoutes)
router.use('/categories', categoriesRoutes)


module.exports = router;