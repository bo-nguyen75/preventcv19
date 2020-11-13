const { Router, json}= require('express');
const router = Router();
const admin = require('firebase-admin');
const { link } = require('fs');
const serviceAccount = require("../../../abc.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://contactform-cb752.firebaseio.com/'
});
const db = admin.database();

class HomeControllers {

    // [GET] / home
    index(req, res) {
      db.ref('datanews').once('value', (snapshot) => {
      
        var data = snapshot.val();
         
        
        // var output = '';
        //   var i;
        //   for (i = 0; i <n; i++){

        //   output +='<div class="col-lg-6" data-aos="fade-right">'+
        //         '<img src="assets/img/about.jpg" class="img-fluid" alt="">'+
               
        //     '</div>'+
        //   '<div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">'+
        // ' <h3><a href="'+data[i].Link+'"></a>'+data[i].title+'"</h3>'+
        //   '<div class="col-sm-6">'+
        //   ' <p class="description">'+data[i].content+' </p>'+
        //     '</div>'+
        //     '</div>'
         
    
        //   }
        //  var newhome= output;
      });
        res.render('home');
      

   
  }
}
   



module.exports = new HomeControllers;