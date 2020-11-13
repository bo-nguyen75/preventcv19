const express = require('express');
const router = express.Router();

const AboutusControllers = require('../app/controllers/AboutusController');


router.get('/', AboutusControllers.index);  

module.exports = router;