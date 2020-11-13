// const db = admin.database();
// db.ref('datanews').once('value', (snapshot) => {
//   data = snapshot.val();
//   module.exports.index=function(req,res){
//     var page =parseInt(req.query.page)||1;
//     var perPage =8;
//     var start =(page-1)*perPage;
//     var end = page*perPage;
//     var drop =(page-1)*perPage;
//     res.render('news',{
//       news: data.get('news').drop(drop).take(perPage).value()
//     });
//   }
// });
const admin = require('firebase-admin')


const db = admin.database();
class NewsControllers {

  // [GET] / home
  index(req, res) {
    let perPage = 5;
    let idPage = 1;
    let start = 0;
    let end = perPage;
    db.ref('datanews').once('value', (snapshot) => {
      
      var data = snapshot.val();
      res.render('news', {datanews: data})
   

});
}
show(req,res){
  res.render("news detail");
}
}



  

module.exports = new NewsControllers;