
var request=require('request');
var express =require('express');
const router = express.Router();
var cheerio=require('cheerio');
const data=require('../../../js/news.json');
const fs =require('fs')
var bodyParser = require('body-parser');



const admin = require('firebase-admin')


const db = admin.database();

class NewsControllers {

  // [GET] / home
  index(req, res) {
   
    db.ref('datanews').on('value', (snapshot) => {
      
      var data = snapshot.val();
      fs.writeFileSync('js/news.json', JSON.stringify(data));
      

      res.render('news', {datanews: data})
   

});
}
show(req,res){


  var link;
  for(let i=0;i<data.length;i++){
    if(req.params.tintuc==data[i].title){
    link=data[i].Link;
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
module.exports = new NewsControllers;