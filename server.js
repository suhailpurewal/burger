var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

//sets / as default page & links to burger controller
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
//port listen
app.listen(process.env.PORT || 3000);

//loads public folder
app.use(express.static('public'));
//use bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
// method override
app.use(methodOverride('_method'));
//require handlebars
var exphbs = require('express-handlebars');
//use handlebars for template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

