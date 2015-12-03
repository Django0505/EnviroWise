var express = require('express'),
    compression = require('compression'),
    exphbs = require('express-handlebars'),
    //bcrypt = require('bcrypt'),
    bodyParser = require('body-parser'),
    //cookieParser = require('cookie-parser'),
    //cookieSession = require('cookie-session'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection')
    app = express();

app.set('strict routing', true);
app.set('x-powered-by', false);
app.set('Admin', false);
app.use(compression())
//Gives access to our database tables
var dbOptions = {
     host : "localhost",
     user : "root",
<<<<<<< HEAD
     password : "2197832",
=======
     password : "spot",
>>>>>>> 3a5c67462ee3b101233acec7df6394819adb9d01
     port : 3306,
     database : "EnviroWise"
 };

//Allows us to use mysql from the http request
app.use(myConnection(mysql, dbOptions, "single"));

//parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({
//    extended: false
//}))
 //parse application/json
 app.use(bodyParser.json())
 app.engine('handlebars', exphbs({
     defaultLayout: 'main'
 }));
app.set('view engine', 'handlebars');
app.use(express.static('views'));
app.use(express.static('public'));
app.get('/',function(req,res){
 	res.render('index')
 });

// app.use(bodyParser.urlencoded({ extended : false}))
// app.use(bodyParser.json());
// app.use(session ({
//         secret:'envirowise',
//         cookie:{maxAge:600000},
//         resave: false,
//         saveUninitialized:true,
//      }))

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
app.get('/contacts', function(req, res){
  res.render('contacts');
})
//Here we posting to our database
app.post('/contacts', function(req, res){
  res.render('contacts');
})


app.get('/feedback', function(req, res){
  res.render('feedback');
})
//===========users
// app.get('/users', users.showUsers);
// app.post('/Admin/:id', users.Admin);
// app.post('/notAdmin/:id', users.notAdmin);
//=======================================
//actions for Max
// app.get('/CatList', categories.showCatList);
// app.post('/cat', categories.addCat);
// app.post('/cat/updateCat/:id', categories.updateCat);
// app.post('/cat/deleteCat/:id', categories.deleteCat);
// app.get('/categories', categories.categories);
//========================================

//actions for Eugine
// app.get('/spazaData', sales.sales);
// app.post('/sale', sales.addSale);
// app.post('/sale/deleteSale/:id', sales.deleteSale);
// app.get('/sales/:searchQuery', sales.searchSales);
// app.get('/mostSellingCategory', categories.mostSellingCategory);
// app.get('/regularSales', sales.regularSales);
//boot server

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('doing my thing at http://localhost:3000/');
});
