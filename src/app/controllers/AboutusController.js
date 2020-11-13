class AboutusController {

  // [GET] / home
  index(req, res) {
    res.render('aboutus');
  }
}


module.exports = new AboutusController;