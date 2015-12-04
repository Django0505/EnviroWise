exports.show = function (req, res, next) {
		req.getConnection(function(err, connection){
			if (err)
			return next(err);
			connection.query('SELECT * FROM users address', [], function(err, results, fields) {
				res.render('signupaddress', {
					users: results,
				    isAdmin: Admin,
					action: read-only
			});
		});
	});
};
exports.update = function(req, res, next){
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('UPDATE users SET ? WHERE id = ?', [data, id], function(err, rows){
					if (err){
					console.log("Error Updating : %s ",err );
					}
			res.redirect('/signup');
		});
	});
};
exports.get = function (req, res, next) {
req.getConnection(function(err, connection){
    if (err){
        return next(err);
    }
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
         name : input.name,
         username : input.username,
         password : input.password,
         address : input.address,
         user_role: input.user_role
    };

    connection.query('insert into users set ?', data, function(err, results) {
        if (err)
        console.log("Error inserting : %s ",err );
      //res.redirect('/signup');
       res.redirect('/signup');
      });
  });
};
exports.delete = function(req, res, next){
	var id = req.params.id;
		req.getConnection(function(err, connection){
			connection.query('DELETE FROM users WHERE id = ?', [id], function(err,rows){
					if(err){
					console.log("Error Selecting : %s ",err );
					}
			res.redirect('/signup');
		});
	});
};
