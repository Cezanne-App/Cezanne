const mongoose = require('mongoose');
const host = process.env.MONGODB_URI || 'mongodb://localhost/cezanne';

mongoose.connect(host, {
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