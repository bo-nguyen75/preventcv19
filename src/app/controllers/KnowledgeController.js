class KnowledgeControllers {

  // [GET] / home
  index(req, res) {
    res.render('knowledge');
  }
}


module.exports = new KnowledgeControllers;