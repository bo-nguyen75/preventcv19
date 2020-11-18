const { Router, json}= require('express');
var cheerio=require('cheerio');
var request=require('request');
const router = Router();
const admin = require('firebase-admin');
const { link } = require('fs');
const data=require('../../../js/homes.json')
const serviceAccount = require("../../../abc.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://preventcovid19-fb9a0.firebaseio.com"
});
const db = admin.database();

class HomeControllers {

    // [GET] / home
    index(req, res) {
   
      db.ref('datahome').once('value', (snapshot) => {
        
        var data = snapshot.val();
        
  
        res.render('home', {datahomes: data})
     
  
  });
  }
  show(req,res){
  
  
    var link;
    for(let i=0;i<data.length;i++){
      if(req.params.title==data[i].title){
      link=data[i].link;
      break;
  
      }
    }
  
  
  
    
        var headers = {
          'User-Agent':'Super Agent/0.0.1',
          'Content-Type':'application/x-ww-form-urlencoded'
        }
        var option={
          url :link,
          headers :headers,
          qs :{'key1':'xxx','key2':'yyy'}
      
  
  
    }
    
    request(option,function(error,response,body){
              if(error){
                  console.log(error);
              }else{
                  //console.log(body);
               var $=cheerio.load(body);
               var doc=$('.col660').html();  
              res.render('detail',{html:doc});
              
        
              }
                
            })
  
  }
}
   



module.exports = new HomeControllers;