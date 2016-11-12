// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var db = require('./models');

var profile = {
    name: "Jon hall",
    alive: false,
    dog: "Kizzy",
    location: "Richmond",
    Mother: "Donetta",
    github: "https://github.com/jhall0310"
  };

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */
 app.get('/api/profile', function index(req, res) {
   res.json({ profile});
 });


 app.get('/', function homepage(req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });

 app.get('/api/dogs', function (req, res) {
   // send all books as JSON response
   db.Dog.find()
     // populate fills in the author id with all the author data
     .populate('location')
     .exec(function(err, Dog){
       if (err) { return console.log("index error: " + err); }
       res.json(Dog);
     });
 });

app.get('/api/dogs/:id', function show(req, res) {
  var foundDog = Dog.filter(function (todo) {
   return Dog._id == DogId;
 })[0];
 res.json(Dog);
});

app.post('/api/dogs', function (req, res) {
  // create new book with form data (`req.body`)
  var Dog = db.Dog;
  var newDog = new db.Dog({
    description: req.body.title,
    color: req.body.hue,
    size: req.body.size,
    image: req.body.pic,
    });
    db.Dogs.push(newDog);
  res.json(newDog);
  console.log("Dog Created", newDog);
  });

  app.delete('/api/dogs/:id', function destroy(req, res) {
    var DogToDelete = parseInt(req.params.id);
    db.Dog.splice(db.Dog.indexOf(DogToDelete), 1);
    res.json(DogToDelete);
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to Jon Hall api! Here's what you need to know!",
    documentationUrl: "https://github.com/jhall0310/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://guarded-garden-63624.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Jon Hall just Jon Hall"}, // CHANGE ME
      {method: "POST", path: "/api/Dogs", description: "Dogs by Color, size and image provied"} // CHANGE ME
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
