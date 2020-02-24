import { SET_ARTWORK } from '../index';

const setArtwork = artwork => ({
  type: SET_ARTWORK,
  payload: artwork,
});

export default setArtwork;
