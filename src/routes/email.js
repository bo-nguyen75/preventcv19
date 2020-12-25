const express = require('express');
const router = express.Router();

const emailController = require('../app/controllers/EmailController');


router.get('/', emailController.index);  

module.exports = router;  