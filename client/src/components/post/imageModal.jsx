import React from 'react';
import Modal from 'react-modal';

const imageModal = ({ artwork, modalIsOpen, setModalIsOpen }) => {
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      id='expanded-image-modal'
      className='Modal'
      overlayClassName='ModalOverlay'
      contentLabel='expanded image'
    >
      <div id='expanded-image-wrapper'>
        <button className='close-modal-button' onClick={handleModalClose}>&times;</button>
        <div id='expanded-image-container'>
          <img id ='expanded-image' src={artwork === null ? '' : artwork.image} />
        </div>
      </div>
    </Modal>
  );
};

export default imageModal;