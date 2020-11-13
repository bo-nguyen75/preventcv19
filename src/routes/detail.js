var request=require('request');
var express =require('express');
const router = express.Router();
var cheerio=require('cheerio');
var bodyParser = require('body-parser');

const detailController = require('../app/controllers/DetailController');

router.use('/',detailController.index)


    
      

module.exports = router;