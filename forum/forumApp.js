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

app.get('/', function(req, res){ //tells the server when you go to the root '/' do this
  res.send(fs.readFileSync('./views/index.html', 'utf8')); //response.sends the browser the ./views/index.html
});

app.get('/topics', function(req, res){ //tells the server when you go to the root '/' do this
  var template = fs.readFileSync('./views/topics/topics.html', 'utf8');//reads the html file that has mustache templating enabled

  db.all('SELECT * FROM topics;', function(err, topics) {//goes through the table data in the db and returns the info to be templated in the mustache below
    var html = Mustache.render(template, {allDemTopics: topics});//template is the puppies.html, allDemPuppies is in the puppies.html file.
    res.send(html);//this sends our mustached html file as the resulting page
  }) //response.sends the browser the ./views/index.html
});

app.get('/topics/index', function(req, res){
	res.send(fs.readFileSync('./views/topics/index.html', 'utf8'));
});

/////////////////////////// 1


app.post('/topics/new', function(req, res){//for the resource puppies/create run this code
  console.log(req.body);//this console logs the value of the form
  db.run("INSERT INTO topics (title, body) VALUES ('" + req.body.title + "','" + req.body.body + "')");
  //res.send('puppy created');//we use body because the db is being written into to 
  res.redirect("/topics");//redirects us to a list of puppies to confirm that we've successfully added our puppy
});

/////////////////////////// 2

//this section takes you to the page where you can delete or update
app.get('/topics/:id', function(req, res){
  var id = req.params.id;
  db.all("SELECT * FROM topics WHERE id = " + id + ";", {}, function(err, topics){
    fs.readFile('./views/topics/show.html', 'utf8', function(err, htmlPid){//we use a readfile to stop and wait for all the data to load before proceeding. 
      console.log(topics);
      // console.log(htmlPid);
      // Sending just the single puppy object. No need to iterate this way. Sweet.
      var renderedHTML = Mustache.render(htmlPid, topics[0]);//jumps into the first index of the array
      res.send(renderedHTML);
    });
  });
});

///////////////////////// 

//deleting a specific puppy
app.put('/topics/:id', function(req, res){
  var id = req.params.id;
  db.run("INSERT INTO topics WHERE id = " + id + ";");
  res.redirect("/topics");
});






app.listen(3000, function() {
  console.log("LISTENING to Topics!");
});