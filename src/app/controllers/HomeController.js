
var axios = require('axios');
class HomeControllers {

  // [GET] / home
  index(req, res) {
    axios.get('https://disease.sh/v3/covid-19/all').then(function(all){
      var tg = all.data;
      axios.get('https://disease.sh/v3/covid-19/countries/vietnam').then(function(vn){
        res.render('home',{
          all: tg,
          vn : vn.data,
        });
      })
    })
  }
  
}


module.exports = new HomeControllers;