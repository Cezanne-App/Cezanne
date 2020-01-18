import React, { useState, useEffect } from 'react';
import Login from './login.jsx';
import Navbar from './navbar/navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bid/bidModal.jsx'
import AddModal from './navbar/addModal.jsx';
import { getArtworks } from '../../helpers/index.js';

const App = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bidArtwork, setBidArtwork] = useState(null);
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
        <Feed artworks={artworks} setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
        <BidModal bidArtwork={bidArtwork} setArtworks={setArtworks} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        <AddModal addModalIsOpen={addModalIsOpen} setAddModalIsOpen={setAddModalIsOpen} setArtworks={setArtworks}/>
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