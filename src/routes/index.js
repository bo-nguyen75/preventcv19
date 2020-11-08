const loginRouter = require('./login');
const adminRouter = require('./admin');
const homeRouter = require('./home');
const meRouter = require('./me');


function route(app) {
  app.use('/me', meRouter);

  app.use('/admin', adminRouter);

  app.use('/login', loginRouter);

  app.use('/', homeRouter);
}

module.exports = route;