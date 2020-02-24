import React, { useState } from 'react';
import { addArtwork, getArtworks } from '../../helpers/index';

const AddForm = ({ setArtworks }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [technique, setTechnique] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [image, setImage] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPost = {
      author,
      title,
      technique,
      height,
      width,
      basePrice: parseInt(basePrice, 10),
      expirationDate,
      image,
    };
    addArtwork(newPost)
      .then(() => {
        getArtworks().then(({ data }) => setArtworks(data));
      })
      .catch(e => console.error(e));
  };

  return (
    <div id="add-form-container">
      <form id="addForm" onSubmit={e => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="text"
          placeholder="Technique"
          onChange={({ target }) => setTechnique(target.value)}
        />
        <input
          type="text"
          placeholder="Height"
          onChange={({ target }) => setHeight(target.value)}
        />
        <input
          type="text"
          placeholder="Width"
          onChange={({ target }) => setWidth(target.value)}
        />
        <input
          type="text"
          placeholder="Base Price"
          onChange={({ target }) => setBasePrice(target.value)}
        />
        <input
          type="text"
          placeholder="Bid Closing Date"
          onChange={({ target }) => setExpirationDate(target.value)}
        />
        <input
          type="text"
          placeholder="Url"
          onChange={({ target }) => setImage(target.value)}
        />
      </form>
      <div id="add-form-buttons-container">
        <button type="submit" form="addForm">
          Share
        </button>
      </div>
    </div>
  );
};

export default AddForm;
