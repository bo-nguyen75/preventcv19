const express = require('express');
const { index } = require('../app/controllers/HomeController');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.post('/email',homeController.email);
router.use('/:title',homeController.show);
router.get('/', homeController.index); 



module.exports = router;