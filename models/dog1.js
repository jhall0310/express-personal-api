var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DogSchema = new Schema({
  description: String,
  color: String,
  size: String,
  image: String
});

var Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;
