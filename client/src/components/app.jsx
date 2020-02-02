import React, { useState, useEffect } from 'react';
import Login from './login.jsx';
import Navbar from './navbar/navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bid/bidModal.jsx'
import AddModal from './navbar/addModal.jsx';
import ImageModal from './post/imageModal.jsx';
import { getArtworks } from '../../helpers/index.js';

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [bidModalIsOpen, setBidModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);

  const [artwork, setArtwork] = useState({});
  const [artworks, setArtworks] = useState([]);

  const [user, setUser] = useState(null);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    getArtworks().then(({data}) => setArtworks(data)).catch(e => console.error(e));
  }, []);

  const renderPage = () => {
    if (!isLogged) return <Login setLogged={setLogged} setUser={setUser} />
    
    return (
      <>
        <Navbar setAddModalIsOpen={setAddModalIsOpen} user={user}/>
        <Feed artworks={artworks} setArtwork={setArtwork} setModalIsOpen={setBidModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
        <BidModal artwork={artwork} setArtworks={setArtworks} modalIsOpen={bidModalIsOpen} setModalIsOpen={setBidModalIsOpen} />
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