const { Router}= require('express');
const router = Router();
const newsControllers=require('../app/controllers/NewsController');

router.use('/:tintuc',newsControllers.show);
router.use('/',newsControllers.index)




module.exports = router;