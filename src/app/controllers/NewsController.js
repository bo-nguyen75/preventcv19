const connect = require("../config/db/");
const db = connect.database();
const rooRef = db.ref("datanews");;

class NewsControllers {
  // [GET] /news
  index(req, res) {
    rooRef.once("value", (snapshot) => {
      const data = snapshot.val();
      res.render("news", { statistical: data });
    });
  }

  add(req, res) {
    const autoId = rooRef.push().key;
    rooRef.child(autoId).set({
      Link: req.body.Link,
      content: req.body.content,
      date: req.body.date,
      image: req.body.image,
      title: req.body.title,
    });
    res.redirect("news");
  }

  update(req, res) {
    const newData = {
      age: req.body.age,
      address: req.body.address,
      state: req.body.state,
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

module.exports = new NewsControllers();
