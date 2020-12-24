const admin = require("firebase-admin");

const serviceAccount = require("../../../../serviceAccountKey.json");

const connect = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://preventcovid19-fb9a0.firebaseio.com",
});

module.exports = connect;
