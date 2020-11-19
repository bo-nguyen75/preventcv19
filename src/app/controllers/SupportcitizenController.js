const { Router}= require('express');
const router = Router();
const admin = require('firebase-admin')



const db = admin.database();
class SupportcitizenControllers {

  // [GET] / home
  index(req, res) {
    db.ref('supportcitizen').once('value', (snapshot) => {
      const data = snapshot.val();
       res.render('supportcitizen', {supportcitizen: data})
   });
  }
}


module.exports = new SupportcitizenControllers;