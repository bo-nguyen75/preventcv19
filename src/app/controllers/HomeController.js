class HomeControllers {

  // [GET] / home
  index(req, res) {
    res.render('home');
  }
}


module.exports = new HomeControllers;