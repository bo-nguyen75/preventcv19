class FilterControllers {

  // [GET] / home
  index(req, res) {
    res.render('filter');
  }
}


module.exports = new FilterControllers;