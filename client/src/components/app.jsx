import React, { useState, useEffect } from 'react';
import Navbar from './navbar/navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bid/bidModal.jsx'
import AddModal from './navbar/addModal.jsx';
import { getPosts } from '../../helpers/index.js';

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bidArtwork, setBidArtwork] = useState(null);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => setArtworks(data)).catch(e => console.error(e));
  }, [])

  return(
    <>
      <Navbar setAddModalIsOpen={setAddModalIsOpen} />
      <Feed artworks={artworks} setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
      <BidModal bidArtwork={bidArtwork} setArtworks={setArtworks} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <AddModal addModalIsOpen={addModalIsOpen} setAddModalIsOpen={setAddModalIsOpen} setArtworks={setArtworks}/>
    </>
  );
};

export default App;