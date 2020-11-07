const connect = require('../config/db/');

class AdminControllers {

  // [GET] /news
  index(req, res) {
    res.render('admin');
  };
} 

module.exports = new AdminControllers;