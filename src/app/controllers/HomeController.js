const {
  Router,
  json
} = require('express');
var cheerio = require('cheerio');
var request = require('request');
const router = Router();
const admin = require('firebase-admin');
const {
  link
} = require('fs');
const datas = require('../../../js/homes.json')
var axios = require('axios');
const serviceAccount = require("../../../preventcovid19.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://preventcovid19-fb9a0.firebaseio.com"
});
const db = admin.database();
const nodemailer = require("nodemailer");
const rooRef = db.ref('email');
const dbb=admin.firestore();


class HomeControllers {

  //[GET] / home
  index(req, res) {
    axios.get('https://disease.sh/v3/covid-19/all').then(function (all) {
      var tg = all.data;
      axios.get('https://disease.sh/v3/covid-19/countries/vietnam').then(function (vn) {
        db.ref('datahome').on('value', (snapshot) => {
          var datanewhomes = snapshot.val();
          db.ref('statistics').on('value', (snapshot) => {
            var people = snapshot.val();
            db.ref('filter').on('value', (snapshot) => {
              var filter = snapshot.val();
              res.render('home', {
                all: tg,
                vn: vn.data,
                datahomes: datanewhomes,
                people: people,
                filter: filter
              });
            })
          })
        })
      })



    });
  }
  show(req, res) {


    var link;
    for (let i = 0; i < datas.length; i++) {
      if (req.params.title == datas[i].title) {
        link = datas[i].link;
        break;

      }
    }




    var headers = {
      'User-Agent': 'Super Agent/0.0.1',
      'Content-Type': 'application/x-ww-form-urlencoded'
    }
    var option = {
      url: link,
      headers: headers,
      qs: {
        'key1': 'xxx',
        'key2': 'yyy'
      }



    }

    request(option, function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        //console.log(body);
        var $ = cheerio.load(body);
        var doc = $('.col660').html();
        res.render('detail', {
          html: doc
        });
      }
    })

  }
  async email(req, res) {
    const output = `
      <p>Cảm ơn bạn đã đăng kí dịch vụ gởi thông báo qua gmail của chúng tôi. Sau khi có tin tức mới nhất , chúng tôi sẽ thông báo đến bạn sớm nhất có thể</p>
      <h3>Thông tin liên hệ</h3>
      <ul>
       <li>Address : Số 254 Nguyễn Văn Linh, Thạc Gián Thanh Khê, Đà Nẵng, Việt Nam</li>
        <li>Phone: 0903 127 637</li>
        <li>Email: c1se22team@gmail.com </li>     
      </ul>
    `;

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "c1se22team@gmail.com", // generated ethereal user
        pass: "khonglamthichet", // generated ethereal password
      },
      tls:{
        rejectUnauthorized: false
      }
    });

    let info = await transporter.sendMail({
      from: '"1Capstone" <c1se22team@gmail.com>', // sender address,
      to: req.body.email,
      subject: 'Chào mừng đến Prevent COVID-19 WEBSITE',
      text: 'Hello World',
      html: output
  })

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    dbb.collection('send-email').doc().set({
      date: new Date(),
      email:req.body.email
      }); 
    res.redirect('back');
  }


}


module.exports = new HomeControllers;