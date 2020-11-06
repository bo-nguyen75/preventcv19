const express = require('express');
const router = express.Router();

const FilterController = require('../app/controllers/FilterController');


router.get('/', FilterController.index);  

module.exports = router;