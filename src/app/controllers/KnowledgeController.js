var express =require('express');
const router = express.Router();
const admin = require('firebase-admin')
const db = admin.database();
class KnowledgeControllers {

  // [GET] / home
  index(req, res) {
    db.ref('dieucanbiet').on('value', (snapshot)=>{
      const data =  snapshot.val();
      res.render('knowledge', {dieucanbiet: data});
  })
}
}


module.exports = new KnowledgeControllers;