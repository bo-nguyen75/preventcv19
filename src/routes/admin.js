const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.delete('/:id', adminController.destroy);
router.put('/:id', adminController.update);
router.post('/', adminController.add); 
router.get('/', adminController.index);  

module.exports = router;  