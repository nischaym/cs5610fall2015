var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
//console.log(mongoose);


app.use(express.static(__dirname + '/public'));
 
var address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var CourseSchema = new mongoose.Schema({
    title:String

},{collection:"course"});


var Course = mongoose.model("Course",CourseSchema);

Course.create({title:"Mongo"},
    function(err,result){
//    console.log(err);
//    console.log(result);
});

require("./public/Assignment/server/app.js")(app,mongoose,db);

app.listen(port,address);