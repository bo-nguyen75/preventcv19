const homeRouter = require('./home');
const newsRouter = require('./news');
const supportcitizenRouter = require('./supportcitizen');
const knowledgeControllers = require('./knowledge');
const filterControllers = require('./filter');
const communityControllers = require('./community');
const aboutusControllers = require('./aboutus');



const { Router}= require('express');
const router = Router();

function route(app) {
  app.use('/vechungtoi', aboutusControllers);

  app.use('/congdong', communityControllers);

  app.use('/dienbiendich', filterControllers);

  app.use('/dieucanbiet', knowledgeControllers);

  app.use('/hotro', supportcitizenRouter);

  app.use('/tintuc', newsRouter);

  app.use('/', homeRouter);
}

module.exports = route;