const { Router, json}= require('express');
var cheerio=require('cheerio');
var request=require('request');
const router = Router();
const admin = require('firebase-admin');
const { link } = require('fs'); 
const datas=require('../../../js/homes.json')
var axios = require('axios');
const serviceAccount = require("../../../preventcovid19.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://preventcovid19-fb9a0.firebaseio.com"
});
const db = admin.database();
class HomeControllers {

  //[GET] / home
  index(req, res) {
    axios.get('https://disease.sh/v3/covid-19/all').then(function(all){
      var tg = all.data;
      axios.get('https://disease.sh/v3/covid-19/countries/vietnam').then(function(vn){
        db.ref('datahome').once('value', (snapshot) => {
          var datanewhomes = snapshot.val();
          db.ref('statistics').once('value', (snapshot) => {
            var people = snapshot.val();
            db.ref('filter').once('value', (snapshot) => {
              var filter = snapshot.val();
            res.render('home',{
            all: tg,
            vn : vn.data,
            datahomes: datanewhomes,
            people:people,
            filter:filter
        });
      })
    })
    })
    }) 
      
   

});
  }
  show(req,res){
  
  
    var link;
    for(let i=0;i<datas.length;i++){
      if(req.params.title==datas[i].title){
      link=datas[i].link;
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