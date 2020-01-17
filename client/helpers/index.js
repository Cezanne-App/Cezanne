import axios from 'axios';

export const getPosts = () => {
  return axios.get('/artworks');
};

export const updateBid = (id, bid) => {
  return axios.put(`artworks/${id}`, {
    bid: bid
  });
};