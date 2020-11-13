const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
<<<<<<< HEAD

app.use(express.static(path.join(__dirname, 'public')));

//Render
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/tintuc', (req, res) => {
  res.render('news');
})

app.get('/dieucanbiet', (req, res) => {
  res.render('knowledge');
})

app.get('/hotro', (req, res) => {
  res.render('supportcitizen');
})

app.get('/congdong', (req, res) => {
  res.render('community');
})

app.get('/vechungtoi', (req, res) => {
  res.render('aboutus');
})

app.get('/dienbiendich', (req, res) => {
  res.render('filter');
})

=======
>>>>>>> 1f8d8aef23463b6ce14c178b8a4491d3eb1e1239
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//Routes init
route(app);

<<<<<<< HEAD

=======
>>>>>>> 1f8d8aef23463b6ce14c178b8a4491d3eb1e1239
//Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Set views
app.set('views', path.join(__dirname, 'resources', 'views'));

//Localhost
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
