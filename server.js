var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// app.post('/api/friends', (req, res) => {
// let newReservation = req.body;

// console.log(newReservation);

// if (friends.length < 5) {
//     friends.push(newReservation);
//     newReservation.confirmed = true;
//     res.json(newReservation);
// } else {
//     waitlist.push(newReservation);
//     newReservation.confirmed = false;
//     res.json(newReservation);
// }
// });

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });