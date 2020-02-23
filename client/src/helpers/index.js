import axios from 'axios';

const SERVER = 'localhost:3000';

// Artworks
export const getArtworks = () => {
  return axios.get('/artworks');
};

export const addArtwork = post => {
  return axios.post('/artworks', {
    post: post
  });
};

// Bids
export const getAllBids = artworkId => {
  return axios.get(`/bids/${artworkId}`);
};

export const saveBid = bid => {
  return axios.post('/bids', bid)
};

export const updateBid = (id, bid) => {
  axios.put(`artworks/${id}`, {
    bid: bid
  })
    .catch(err => console.error(err));
};