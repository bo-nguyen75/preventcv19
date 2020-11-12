const loginRouter = require('./login');
const adminRouter = require('./admin');
const homeRouter = require('./home');


function route(app) {

  app.use('/admin', adminRouter);

  app.use('/login', loginRouter);

  app.use('/', homeRouter);
}

module.exports = route;