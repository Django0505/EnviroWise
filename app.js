var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser=require('body-parser')
    app = express();
app.set('strict routing', true);
app.set('x-powered-by', false)
app.set('Admin', false);



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
// app.post('/signup', login.signups);
// app.post("/login", login.logins);
// app.post('/logout', login.logouts);
//===========hide url





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
