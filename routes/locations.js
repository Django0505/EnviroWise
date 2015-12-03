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
		connection.query('insert into bin_status set ?', data, function(err, results) {
				if (err)
			console.log("Error inserting : %s ",err );
				res.redirect('/');
		});
	});
};
