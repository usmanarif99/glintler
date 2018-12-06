//REQUIRED NODE MODULES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var apiRoute = require('./routes/apiRoute');
var mysql = require('mysql');
var cors = require('cors');


//SET
app.set('port', (process.env.PORT || 2018));

//USE
app.use(bodyParser.urlencoded({extended : false}));
app.use(methodOverride("_method"));
app.use(cors());
app.use(bodyParser.json());



//ROUTES
app.use(apiRoute);


//Index Route
app.get("/", function(req, res){
    res.send("Welcome to glinteler API services");
});

//Global handling of undefined routes
app.get("*", function(req, res){
    res.send("Welcome to glinteler API services");
});

//LISTEN PORT
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
