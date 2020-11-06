const express = require('express');
const router = express.Router();

const CommunityController = require('../app/controllers/CommunityController');


router.get('/', CommunityController.index);  

module.exports = router;