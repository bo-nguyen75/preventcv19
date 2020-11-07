const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const port = 5000;
const csrfMiddleware = csrf({ cookie: true });
const route = require('./routes');
const db = require('../src/app/config/db/index')
const cookies = require('cookies');

//form chu
app.use(express.urlencoded());
app.use(express.json());
// app.use(csrfMiddleware);

//Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');


//set views
app.set('views',path.join(__dirname, 'resources', 'views'));
//set public
app.use(express.static(path.join(__dirname, 'public')));

//Routes init
route(app);

// app.get("/admin", function (req, res) {
//   const sessionCookie = req.cookie.session || "";

//   db
//     .auth()
//     .verifySessionCookie(sessionCookie, true /** checkRevoked */)
//     .then(() => {
//       res.render("admin");
//     })
//     .catch((error) => {
//       res.redirect("/login");
//     });
// });

//local host - 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

