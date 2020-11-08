const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.post('/', adminController.add); 
router.get('/', adminController.index);  

module.exports = router;  