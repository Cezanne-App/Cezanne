import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bid/bidModal.jsx'

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bidArtwork, setBidArtwork] = useState(null);

  return(
    <>
      <Navbar />
      <Feed setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
      <BidModal bidArtwork={bidArtwork} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default App;