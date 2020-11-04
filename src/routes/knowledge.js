const express = require('express');
const router = express.Router();

const KnowledgeController = require('../app/controllers/KnowledgeController');


router.get('/', KnowledgeController.index);  

module.exports = router;