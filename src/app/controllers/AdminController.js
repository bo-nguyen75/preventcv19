const { ref } = require("firebase-functions/lib/providers/database");
const { database } = require("../config/db/");
const connect = require("../config/db/");
const db = connect.database();
var rooRef = db.ref("statistics");
class AdminControllers {
  // [GET] /news
  index(req, res) {
    rooRef.once("value", (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      res.render("admin", { statistical: data });
    });
  }

  add(req, res) {
    const key = req.body.patient;
    const autoId = rooRef.push().key;
    const autoKey = key.substr(2,key.length);
    rooRef.child(autoKey).set({
      patient: req.body.patient,
      age: req.body.age,
      address: req.body.address,
      status: req.body.status,
      nationality: req.body.nationality,
    });
    res.redirect("admin");
  }

  update(req, res) {
    const newData = {
      age: req.body.age,
      address: req.body.address,
      status: req.body.status,
      nationality: req.body.nationality,
    }
    const patientID = req.params.id;
    rooRef.child(patientID).update(newData);
    res.redirect('back');
  }

  destroy(req, res) {
    const patientID = req.params.id;
    rooRef.child(patientID).remove();
    res.redirect('back');
  }

}

module.exports = new AdminControllers();
