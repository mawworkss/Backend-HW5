var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'form')));
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	setTimeout(function(){

		res.send(JSON.stringify({
			firstName: req.body.firstName || null,
			lastName: req.body.lastName || null
		}));
	}, 1000)

	console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

app.listen(3000, function () {
  console.log('Server is running');
  console.log('localhost:3000');
});
