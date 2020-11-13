// const express = require('express');
// const router = express.Router();

// const KnowledgeController = require('../app/controllers/KnowledgeController');


// router.get('/', KnowledgeController.index);  

// module.exports = router;
const admin = require('firebase-admin')

//  var serviceAccount = require("../../abc.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://contactform-cb752.firebaseio.com/'
// });

const db = admin.database();

const { Router}= require('express');
const router = Router();

router.get('/', (req, res) => {
    db.ref('dieucanbiet').once('value', (snapshot) => {
       data = snapshot.val();
       res.render('knowledge', {dieucanbiet: data})
       //console.log(c)
    

});
});
module.exports = router;