var express = require('express')
var app = express()
 
 
 app.use(express.static(__dirname + '/public'));
 
var address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})
 
app.listen(port,address)