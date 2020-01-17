import React, { useState, useEffect } from 'react';
import Navbar from './navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bid/bidModal.jsx'
import { getPosts } from '../../helpers/index.js';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bidArtwork, setBidArtwork] = useState(null);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => setArtworks(data)).catch(e => console.error(e));
  }, [])

  return(
    <>
      <Navbar />
      <Feed artworks={artworks} setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
      <BidModal bidArtwork={bidArtwork} setArtworks={setArtworks} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default App;