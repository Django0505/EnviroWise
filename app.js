var express = require('express'),
    compression = require('compression'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    signup = require("./routes/signup");
    login = require("./routes/login")
    app = express();

app.set('strict routing', true);
app.set('x-powered-by', false);
app.set('Admin', false);
app.use(compression());
//Gives access to our database tables
var dbOptions = {
     host : "localhost",
     user : "root",
     password : "2197832",
     port : 3306,
     database : "EnviroWise"
 };

//Allows us to use mysql from the http request
app.use(myConnection(mysql, dbOptions, "single"));

 app.use(bodyParser.json());
 app.engine('handlebars', exphbs({
     defaultLayout: 'main'
 }));
app.set('view engine', 'handlebars');
app.use(express.static('views'));
app.use(express.static('public'));
app.get('/',function(req,res){
 	res.render('index')
 });

//Here we rendering the login template to the browser
app.get("/login", function(req, res){
 res.render("login");
})

//Here we rendering the about template to the browser
app.get('/about', function(req, res){
  res.render('about');
})

//Here we rendering the collector's template to the browser
app.get('/collector', function(req, res){
  res.render('collector');
})

//Here we rendering the contacts template to the browser
app.get('/contact', function(req, res){
  res.render('contact');
})
//Here we posting to our database
app.post('/contact', function(req, res){
  res.render('contact');
})

app.get('/feedback', function(req, res){
  res.render('feedback');
})

<<<<<<< HEAD
var port = process.env.PORT || 5000;
=======
app.post('/locations/add', location.add);
app.get('/', location.show);
app.get('/locations/delete/:id', location.delete);

<<<<<<< HEAD
var port = process.env.PORT || 3000;
>>>>>>> 2c0899f421e9436916bcb9c30fb34e6ae2dac819
=======
var port = process.env.PORT || 3001;
>>>>>>> cc1f0d535d2089a9bbc98f80968738cf69c184a2
var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('EnviroWise running at http://localhost:3000/');
});
