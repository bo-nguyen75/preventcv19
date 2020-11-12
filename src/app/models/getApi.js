const fetch1 = require('node-fetch');
const url = "https://disease.sh/v3/covid-19"

function getAll(callback) {
  fetch(`${url}/all`)
    .then(res => {
      return res.json();
    })
    .then(callback);
}

module.exports = getAll();