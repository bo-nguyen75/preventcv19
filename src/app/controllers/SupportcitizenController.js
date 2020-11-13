class SupportcitizenControllers {

  // [GET] / home
  index(req, res) {
    res.render('supportcitizen');
  }
}


module.exports = new SupportcitizenControllers;