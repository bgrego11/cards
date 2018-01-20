var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  id:  String,
  color: String,
  text:   String,
  answers: String
 
});

// Compile model from schema
var Card = mongoose.model('Card', cardSchema );


// function newDeck() {
// Card.find({} function (err, cards) {
//     if (err) return handleError(err);
//     console.log(cards) // Space Ghost is a talk show host.
//   })
// }

module.exports = Card;