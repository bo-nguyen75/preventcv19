const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');


router.post('/sessionLogin', homeController.sessionLogin);

router.get('/sessionLogout', homeController.sessionLogout);

router.get('/', homeController.index);  

module.exports = router;