var express = require('express'); // creates server
var sqlite3 = require('sqlite3') // requires sqlite table
var fs = require('fs'); // read and write files
var Mustache = require('mustache'); // allows us to make templates
var morgan = require('morgan'); // show us our login info
var bodyParser = require('body-parser'); // allows us to parse information that comes in the body of a request so we can database it
var methodOverride = require('method-override'); //hack to allow us to do DELETE and PUTS 

var db = new sqlite3.Database('./forumDB.db'); //assigns a variable called db to our forum database
var app = express(); //creates the werver

// db.all - read
// db.run - write
// readFileSync is asyncronous

app.use(morgan('dev')); //app.use allows us to use module call in thop section. Morgan allows for server status codes
app.use(bodyParser.urlencoded({ extended: false})); // enalbles the body parser for all code in the file
app.use(methodOverride('_method')); //


// Welcome Page: get('/')
// The welcome page request the route get('/topics')
app.get('/', function(req, res){ // my request is '/' and the the reponse is'./views/index.html'
  res.send(fs.readFileSync('./views/index.html', 'utf8'));
});


// The Forum Page: get('/topics')
// Requests Create Your Topic page with the route of get('/topics/new') through New Topic link
// Requests individual Topic Title ID page with the route of get('topics/:ID') if one of the Topics are clicked
app.post('/topics/new', function(req, res){ // my request is '/topics' and the the reponse is'./views/index.html'
  db.run("INSERT INTO Topics ")
  res.send(fs.readFileSync('./views/new.html', 'utf8'));
});



// Create your topic page: get('/new')
// Allows user to CREATE a new Topic and topic body
// After user hits submit it POST/Creates a ('/topics') for viewing within ('/topics')
// And REDIRECTS user to ('/topics')

// Topic Title: get('topics/:id)
// Allows user to Put/Update individual topic's votes (basically increments votes)
// Allows user to Put/Update individual topic's comments (basically adds comments)


app.listen(3000, function() {
  console.log("LISTENING!");
});