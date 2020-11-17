const { Router}= require('express');
const router = Router();
const admin = require('firebase-admin')



const db = admin.database();


class FilterControllers {

  // [GET] / home
  index(req, res) {
    db.ref('filter').once('value', (snapshot) => {
     const data = snapshot.val();
      res.render('filter', {filter: data})
  });
}
}


module.exports = new FilterControllers;