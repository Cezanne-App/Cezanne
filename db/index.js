const mongoose = require('mongoose');
const host = process.env.MONGODB_URI || 'mongodb://localhost/cezanne';

mongoose.connect(host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => { throw new Error(e) })

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
  highestBidderId: Number,
  expirationDate: Date
});

const bidSchema = new mongoose.Schema({
  artworkId: String,
  bidderId: String,
  ownerId: String,
  value: Number,
  date: { type: Date, default: Date.now() }
});

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  userName: String,
  email: String,
  address: String,
  isArtist: Boolean
});

const Artwork = mongoose.model('Artwork', artworkSchema);
const Bid = mongoose.model('Bid', bidSchema);

module.exports.Artwork = Artwork;
module.exports.Bid = Bid;
