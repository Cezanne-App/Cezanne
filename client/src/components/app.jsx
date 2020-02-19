import React, { useState, useEffect } from 'react';
import Login from './login.jsx';
import Navbar from './navbar/navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './biddingModal/bidModal.jsx'
import AddModal from './navbar/addModal.jsx';
import ImageModal from './post/imageModal.jsx';
import { getArtworks } from '../../helpers/index.js';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(window.location.href);

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [bidModalIsOpen, setBidModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  const [artwork, setArtwork] = useState({});
  const [artworks, setArtworks] = useState([]);
  const [bids, setBids] = useState({values: [], dates: []});

  const [user, setUser] = useState(null);
  const [isLogged, setLogged] = useState(false);

  socket.on('bid', (bid) => {
    if (bid.artworkId === artwork._id) {
      const newBids = {...bids};
      newBids.values.push(bid.value);
      newBids.dates.push(bid.date);
      setBids(newBids);
    }
  });

  useEffect(() => {
    getArtworks().then(({data}) => setArtworks(data)).catch(e => console.error(e));
  }, []);

  const renderPage = () => {
    if (!isLogged) return <Login setLogged={setLogged} setUser={setUser} />
    
    return (
      <>
        <Navbar setAddModalIsOpen={setAddModalIsOpen} user={user}/>
        <Feed artworks={artworks} setArtwork={setArtwork} setModalIsOpen={setBidModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
        <BidModal artwork={artwork} setArtworks={setArtworks} modalIsOpen={bidModalIsOpen} setModalIsOpen={setBidModalIsOpen} bids={bids} setBids={setBids} />
        <AddModal addModalIsOpen={addModalIsOpen} setAddModalIsOpen={setAddModalIsOpen} setArtworks={setArtworks}/>
        <ImageModal artwork={artwork} modalIsOpen={imageModalIsOpen} setModalIsOpen={setImageModalIsOpen}/>
      </>
    );
  };
  
  return (
    <>
      {renderPage()}
    </>
  );
};

export default App;