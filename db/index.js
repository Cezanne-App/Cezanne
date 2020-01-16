const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cezanne', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error(error));

const artworkSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  classification: String,
  technique: String,
  height: Number,
  width: Number,
  image: String,
  basePrice: Number,
  highestBid: Number,
  expirationDate: Date
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports.Artwork = Artwork;

// Objects:

// https://www.harvardartmuseums.org/collections/object/6877?position=19
// https://www.harvardartmuseums.org/collections/object/262968?position=46
// https://www.harvardartmuseums.org/collections/object/6108?position=47
// https://www.harvardartmuseums.org/collections/object/320305?position=12


// https://upload.wikimedia.org/wikipedia/commons/d/d4/Paul_C%C3%A9zanne%2C_1892-95%2C_Les_joueurs_de_carte_%28The_Card_Players%29%2C_60_x_73_cm%2C_oil_on_canvas%2C_Courtauld_Institute_of_Art%2C_London.jpg

// Classification
// Painting
// Drawing
// Print
// Photograph