import axios from 'axios';

export const getPosts = () => {
  return axios.get('/artworks');
};

export const addPost = (post) => {
  return axios.post('/artworks', {
    post: post
  });
};

export const updateBid = (id, bid) => {
  return axios.put(`artworks/${id}`, {
    bid: bid
  });
};