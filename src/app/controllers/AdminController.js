const { database } = require('../config/db/');
const connect = require('../config/db/');
const db = connect.database();
class AdminControllers {

  // [GET] /news
  index(req, res) {
    db.ref('statistical').once('value',(snapshot) => {
      const data = snapshot.val();
      res.render('admin', {statistical: data});
    })
  };

  add(req, res) {
    const newData = {
      patient: req.body.patient,
      age: req.body.age,  
      address: req.body.address, 
      status: req.body.status, 
      nationality: req.body.nationality, 
      age: req.body.age, 
    };
    db.ref('user').push(newData);
    res.redirect('admin');
  };

  update(req, res) {
    const newData = {
      patient: req.body.patient,
      age: req.body.age,  
      address: req.body.address, 
      status: req.body.status, 
      nationality: req.body.nationality, 
      age: req.body.age, 
    };
    const updates = {};
    updates['/user' + patient.value] = newData;
    db.ref().update(updates);
  };

  delete(req, res) {
    db.ref('statistical').remove();
  };
} 

module.exports = new AdminControllers;