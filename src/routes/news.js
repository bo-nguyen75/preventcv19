// const express = require('express');
// const router = express.Router();

// const NewsController = require('../app/controllers/NewsController');


// router.get('/', NewsController.index);  

// module.exports = router;


const { Router}= require('express');
const router = Router();
const newsControllers=require('../app/controllers/NewsController');

router.use('/:tintuc',newsControllers.show);
router.use('/',newsControllers.index)




module.exports = router;