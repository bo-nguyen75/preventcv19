var request=require('request');
var express =require('express');
const router = express.Router();
var cheerio=require('cheerio');
var bodyParser = require('body-parser');
var headers = {
  'User-Agent':'Super Agent/0.0.1',
  'Content-Type':'application/x-ww-form-urlencoded'
}
var option={
  url :' http://giadinh.net.vn/y-te/quang-ninh-ra-soat-cac-truong-hop-tiep-xuc-gan-voi-benh-nhan-duong-tinh-voi-sars-cov-2-20201106183813509.htm',
  method :'GET',
  headers :headers,
  qs :{'key1':'xxx','key2':'yyy'}
}
class DetailControllers {


    // [GET] / home
    index(req, res){
      request(option,function(error,response,body){
        if(error){
            console.log(error);
        }else{
            //console.log(body);
         var $=cheerio.load(body);
         var doc=$('.contentl').html();  
        res.render('detail',{html:doc});
        
  
        }
          
      })
    


    
        
 
    }
  }
module.exports = new DetailControllers;