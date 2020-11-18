// const express = require('express');
// const router = express.Router();

 const knowledgeController = require('../app/controllers/KnowledgeController');

const { Router}= require('express');
const router = Router();




router.get('/', knowledgeController.index);
  





module.exports = router;  
