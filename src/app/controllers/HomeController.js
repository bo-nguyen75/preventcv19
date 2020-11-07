const connect = require('../config/db/index')


class HomeControllers {

  // [GET] /news
  index(req, res) {
    res.render('home');
  }

  sessionLogout(req, res) {
    res.clearCookie("session");
    res.redirect('/login');
  };

  sessionLogin(req, res) {
    const idToken = req.body.idToken.toString();
  
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
  
    connect
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true };
          res.cookie("session", sessionCookie, options);
          res.end(JSON.stringify({ status: "success" }));
        },
        (error) => {
          res.status(401).send("UNAUTHORIZED REQUEST!");
        }
      );
  };
} 

module.exports = new HomeControllers;