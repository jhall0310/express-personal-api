// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var dogs_list = [{
  description: "Pug",
  color: "Tan",
  size: "small",
  image: "http://i.imgur.com/fry9DhJ.jpg"
},
{
  description: "Beagle",
  color: "Brown and White",
  size: "medium",
  image: "http://i.imgur.com/KAkGC6h.jpg"
},
{
  description: "German Shepherd",
  color: "Black and Brown",
  size: "large",
  image: "http://i.imgur.com/R7rFhwB.png"
},
{
  description: "Rottweiler",
  color: "Black",
  size: "large",
  image: "http://i.imgur.com/WxfIZ5D.png"
},
{
  description: "Saint Bernard",
  color: "Brown and White",
  size: "large",
  image: "http://i.imgur.com/01P5cp2.png"
},
{
  description: "Akita",
  color: "Red and White",
  size: "medium",
  image: "http://i.imgur.com/DbrdV8b.png"
},
{
  description: "Golden Retriever",
  color: "Golden of Course!",
  size: "medium",
  image: "http://i.imgur.com/QerlWne.png"
},
{
  description: "Miniature Schnauzer",
  color: "Gray",
  size: "small",
  image: "http://i.imgur.com/aeBkV7B.png"
},
{
  description: "Pekingese",
  color: "Tan",
  size: "small",
  image: "http://i.imgur.com/ARv8YCi.png"
},
];

db.Dog.create(dogs_list, function(err, dog){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new dog", dog._id)
  process.exit(); // we're all done! Exit the program.
})
