const express = require('express');
const router = express.Router();

const SupportcitizenController = require('../app/controllers/SupportcitizenController');


router.get('/', SupportcitizenController.index);  

module.exports = router;