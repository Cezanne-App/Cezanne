import React, { useState, useEffect } from 'react';
import Login from './Login/index';
import Navbar from './Navbar/navbar.jsx';
import Feed from './Feed/index';
import BidModalContainer from '../containers/BidModal/index';
import AddModal from './Navbar/addModal.jsx';
import ImageModal from './Post/imageModal.jsx';
import { getArtworks } from '../helpers/index.js';
import { subscribeToBids } from '../helpers/sockets.js';

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [bidModalIsOpen, setBidModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  const [artwork, setArtwork] = useState({});
  const [artworks, setArtworks] = useState([]);
  const [bids, setBids] = useState({values: [], dates: []});

  const [user, setUser] = useState(null);
  const [isLogged, setLogged] = useState(false);

  subscribeToBids((err, bid, artwork) => {
    console.log(bid.artworkId, artwork)
    if (bid.artworkId === artwork._id) {
      let newBids = {...bids};
      newBids.values.push(bid.value);
      newBids.dates.push(bid.date);
      setBids(newBids);
    }
  });

  useEffect(() => {
    getArtworks().then(({ data }) => setArtworks(data)).catch(e => console.error(e));
  }, []);

  const renderPage = () => {
    if (!isLogged) return <Login setLogged={setLogged} setUser={setUser} />
    
    return (
      <>
        <Navbar setAddModalIsOpen={setAddModalIsOpen} user={user}/>
        <Feed artworks={artworks} setArtwork={setArtwork} setModalIsOpen={setBidModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
        <BidModalContainer setArtworks={setArtworks} modalIsOpen={bidModalIsOpen} setModalIsOpen={setBidModalIsOpen} bids={bids} setBids={setBids} />
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