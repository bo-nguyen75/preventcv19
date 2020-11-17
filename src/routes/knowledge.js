// const express = require('express');
// const router = express.Router();

// const KnowledgeController = require('../app/controllers/KnowledgeController');

const { Router}= require('express');
const router = Router();
const admin = require('firebase-admin')

 var serviceAccount = require("../../preventcovid19.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://preventcovid19-fb9a0.firebaseio.com/'
});



router.get('/', (req, res)=>{
    db.ref('dieucanbiet').once('value', (snapshot)=>{
       const data =  snapshot.val();
       res.render('knowledge', {dieucanbiet: data});
    })

});  





module.exports = router;  
