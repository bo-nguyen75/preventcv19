const connect = require("../config/db/");
const db = connect.firestore();

class EmailControllers {
  // [GET] /news
  index(req, res) {
    db.collection("send-email")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          // console.log(doc.id, '=>', doc.data());
          //console.log(doc.data())
          var data = doc.data().email;
          var endUsersList = [];
          endUsersList.push(data);

          console.log(endUsersList);
          res.render("email", { statistical: endUsersList });
        });
      });
  }
}
module.exports = new EmailControllers();
