exports.add = function (req, res, next) {
		req.getConnection(function(err, connection){
				if (err){
					return next(err);
				}
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			description : input.description,
      latitude : input.latitude,
      longitude: input.longitude
			};
			console.log(data);
		connection.query('insert into locations set ?', data, function(err, results) {
				if (err)
			console.log("Error inserting : %s ",err );
				res.redirect('/');
		});
	});
};
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err)
			return next(err);
		connection.query('select * from locations', [], function(err, results) {
        	if (err) return next(err);
					console.log(results);
    		res.render( 'index', {
    			locations : results
    		});
      });
	});
};
