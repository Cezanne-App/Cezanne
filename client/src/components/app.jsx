import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import Feed from './feed.jsx';
import BidModal from './bidModal.jsx'

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return(
    <>
      <Navbar />
      <Feed setModalIsOpen={setModalIsOpen}/>
      <BidModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default App;