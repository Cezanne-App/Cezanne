import axios from 'axios';

export const getArtworks = () => {
  return axios.get('/artworks');
};

export const addArtwork = post => {
  return axios.post('/artworks', {
    post: post
  });
};

export const getAllBids = ArtworkId => {
  return axios.get(`/bids/${ArtworkId}`);
};

export const updateBid = (id, bid) => {
  return axios.put(`artworks/${id}`, {
    bid: bid
  });
};