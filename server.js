var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/test');
//var db = mongoose.connection;


var connectionString = 'mongodb://127.0.0.1:27017/test';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);

app.use(express.static(__dirname + '/public'));
 
var address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//app.get('/', function (req, res) {
//  res.send('Hello World')
//})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//var CourseSchema = new mongoose.Schema({
//    title:String
//
//},{collection:"course"});
//
//
//var Course = mongoose.model("Course",CourseSchema);
//
//Course.create({title:"Mongo"},
//    function(err,result){
////    console.log(err);
////    console.log(result);
//});

require("./public/Assignment/server/app.js")(app,mongoose,db);

app.listen(port,address);