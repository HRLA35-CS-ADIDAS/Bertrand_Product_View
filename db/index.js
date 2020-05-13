var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shoes', { useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log('connected mongodb'));

var shoeSchema = mongoose.Schema({
  id: Number,
  name: String,
  current_price: Number,
  old_price: Number,
  category: String,
  reviews: Number,
  gender: String,
  type: String,
  size: Array,
  available_colors: Array,
  carousel_images: Array,
  related_shoes: Array,
  matching_items: Array
})

var Shoe = mongoose.model('Shoe', shoeSchema)

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected')
// });

// module.exports = db;
module.exports = Shoe;

// 'mongodb://mongo:27017/shoes'