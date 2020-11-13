class CommunityControllers {

  // [GET] / home
  index(req, res) {
    res.render('community');
  }
}


module.exports = new CommunityControllers;