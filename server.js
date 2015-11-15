var express = require('express')
var app = express()
var bodyParser = require('body-parser');
 
 app.use(express.static(__dirname + '/public'));
 
var address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require("./public/Assignment/server/app.js")(app);

app.listen(port,address)