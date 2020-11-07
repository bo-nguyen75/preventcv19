const { fb } = require('../config/db/index');
const firebase = require('../config/db/index');

class LoginControllers {

  // [GET] /news
  index(req, res) {
    res.render('login');
  }

} 

module.exports = new LoginControllers;