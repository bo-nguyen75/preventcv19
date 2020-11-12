const { database } = require('../config/db/');
const connect = require('../config/db/');
const db = connect.database();
const rooRef = db.ref('statistics');
class AdminControllers {

  // [GET] /news
  index(req, res) {
    rooRef.once('value',(snapshot) => {
      const data = snapshot.val();
      res.render('admin', {statistical: data});
    })
  };

  add(req, res) {
    rooRef.child(req.body.id).set({
      patient: req.body.patient,
      age: req.body.age,  
      address: req.body.address, 
      state: req.body.state, 
      nationality: req.body.nationality, 
    })
    res.redirect('admin'); 
  };

  update(req, res) {
    // const id = req.params.id;
    const newData = {   
      patient: req.body.patient,
      age: req.body.age,  
      address: req.body.address,
      state: req.body.state, 
      nationality: req.body.nationality,
    };
    // const updates = {};
    // updates['/statistics' + index] = newData;
    // db.ref().update(updates);
    // rooRef.orderByKey.on('value',(snap) => {
    //   console.log(snap.val());
    // })
    rooRef.child(req.body.id).update(newData);
  };

  // delete(req, res) {
  //   db.ref('statistical').remove();
  // };
} 

module.exports = new AdminControllers;