// const express = require('express');
// const router = express.Router();

// const FilterController = require('../app/controllers/FilterController');


// router.get('/', FilterController.index);  

// module.exports = router;
const admin = require('firebase-admin')


const db = admin.database();

const { Router}= require('express');
const router = Router();

router.get('/', (req, res) => {
    db.ref('filter').once('value', (snapshot) => {
       data = snapshot.val();
       res.render('filter', {filter: data})
       //console.log(c)
    

});
});
module.exports = router;