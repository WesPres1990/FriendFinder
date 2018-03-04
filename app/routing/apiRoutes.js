var friends = require("../data/friends.js");
var path = require('path');

module.exports = function(app) {
    app.get('/api/friends', (req, res) => res.json(friends));

    
	app.post('/api/friends', function(req, res) {
		var userData = req.body;
		var userResponses = userData.scores;
		var totalDifference = 0;

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i] - userResponses[j]);
			}

			if (diff < totalDifference) {
				totalDifference = diff;
			}
		}
		friends.push(userData);
	});
};

