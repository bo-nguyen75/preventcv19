const loginRouter = require('./login');
const adminRouter = require('./admin');
const homeRouter = require('./home');
const newRouter = require('./news');
const emailRouter = require('./email');

function route(app) {

  app.use('/email', emailRouter);

  app.use('/news', newRouter);

  app.use('/admin', adminRouter);

  app.use('/login', loginRouter);

  app.use('/', homeRouter);
}

module.exports = route;