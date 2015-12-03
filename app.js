var express = require('express'),
    exphbs = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection')
    app = express();

app.set('strict routing', true);
app.set('x-powered-by', false);
app.set('Admin', false);

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
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

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(session ({
        secret:'envirowise',
        cookie:{maxAge:600000},
        resave: false,
        saveUninitialized:true,
     }))

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('EnviroWise running at http://localhost:3000/');
});
