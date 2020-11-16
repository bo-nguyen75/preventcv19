const { database } = require("../config/db/");
const connect = require("../config/db/");
const db = connect.database();
const rooRef = db.ref("statistics");
const functions = require('firebase-functions');
class AdminControllers {
  // [GET] /news
  index(req, res) {
    rooRef.once("value", (snapshot) => {
      const data = snapshot.val();
      res.render("admin", { statistical: data });
    });
  }

  add(req, res) {
    const key = req.body.patient;
    rooRef.child(key).set({
      patient: req.body.patient,
      age: req.body.age,
      address: req.body.address,
      state: req.body.state,
      nationality: req.body.nationality,
    });
    res.redirect("admin");
  }

  update(req, res) {
    rooRef.orderByChild('patient').equalTo('BN1').on('value', snapshot => {
      console.log(snapshot.val());
    });
    res.redirect("admin");
  }

  destroy(req, res) {
    const patientID = req.params.id;
    rooRef.child(patientID).remove();
    res.redirect('back');
  }

}

module.exports = new AdminControllers();
