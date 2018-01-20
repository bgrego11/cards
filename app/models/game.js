var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  name: String,
  pw: String,
  host:  Schema.Types.Mixed,
  players: [],
  bdeck: [],
  wdeck: [],
  dealer: Schema.Types.Mixed,
  rules: Schema.Types.Mixed
 
});

// Compile model from schema
var Game = mongoose.model('Game', gameSchema );
 


// function newDeck() {
// Card.find({} function (err, cards) {
//     if (err) return handleError(err);
//     console.log(cards) // Space Ghost is a talk show host.
//   })
// }

module.exports = Game;