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

const bidSchema = new mongoose.Schema({
  artworkId: Number,
  bidderId: Number,
  ownerId: Number,
  value: Number,
  date: Date
});

const Artwork = mongoose.model('Artwork', artworkSchema);
const Bid = mongoose.model('Bid', bidSchema);

module.exports.Artwork = Artwork;
module.exports.Bid = Bid;