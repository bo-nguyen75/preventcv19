class NewsControllers {

  // [GET] / home
  index(req, res) {
    res.render('news');
  }
}


module.exports = new NewsControllers;