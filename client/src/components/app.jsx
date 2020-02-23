import React, { useState, useEffect } from 'react';
import Login from './Login/index';
import Navbar from './Navbar/navbar.jsx';
import Feed from './Feed/index';
import BidModalContainer from '../containers/BidModal/index';
import ImageModalContainer from '../containers/Post/imageModal';
import AddModal from './Navbar/addModal.jsx';
import { getArtworks } from '../helpers/index.js';
import { subscribeToBids } from '../helpers/sockets.js';

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [bidModalIsOpen, setBidModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  const [artworks, setArtworks] = useState([]);
  const [bids, setBids] = useState({values: [], dates: []});

  const [user, setUser] = useState(null);
  const [isLogged, setLogged] = useState(false);

  // Subscribe to socket.io 
  subscribeToBids();

  useEffect(() => {
    getArtworks().then(({ data }) => setArtworks(data)).catch(e => console.error(e));
  }, []);

  const renderPage = () => {
    if (!isLogged) return <Login setLogged={setLogged} setUser={setUser} />
    
    return (
      <>
        <Navbar setAddModalIsOpen={setAddModalIsOpen} user={user}/>
        <Feed artworks={artworks} setModalIsOpen={setBidModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
        <BidModalContainer setArtworks={setArtworks} modalIsOpen={bidModalIsOpen} setModalIsOpen={setBidModalIsOpen} bids={bids} setBids={setBids} />
        <AddModal addModalIsOpen={addModalIsOpen} setAddModalIsOpen={setAddModalIsOpen} setArtworks={setArtworks}/>
        <ImageModalContainer modalIsOpen={imageModalIsOpen} setModalIsOpen={setImageModalIsOpen}/>
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