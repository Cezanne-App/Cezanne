import React, {useState} from 'react';
import { addPost } from '../../../helpers/index.js';
import { getPosts } from '../../../helpers/index.js';

const AddForm = ({ setArtworks }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [technique, setTechnique] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [image, setImage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newPost = {
      author: author,
      title: title,
      technique: technique,
      height: height,
      width: width,
      basePrice: parseInt(basePrice),
      expirationDate: expirationDate,
      image: image
    }
    addPost(newPost)
    .then(() => {
      getPosts()
      .then(({data}) => setArtworks(data))
    })
    .catch(e => console.error(e))
  };

  return (
    <div id='add-form-container'>
      <form id='addForm' onSubmit={(e) => handleFormSubmit(e)}>
        <input type='text' placeholder='Author' onChange={({target}) => setAuthor(target.value)}/>
        <input type='text' placeholder='Title' onChange={({target}) => setTitle(target.value)}/>
        <input type='text' placeholder='Technique' onChange={({target}) => setTechnique(target.value)}/>
        <input type='text' placeholder='Height' onChange={({target}) => setHeight(target.value)}/>
        <input type='text' placeholder='Width' onChange={({target}) => setWidth(target.value)}/>
        <input type='text' placeholder='Base Price' onChange={({target}) => setBasePrice(target.value)}/>
        <input type='text' placeholder='Bid Closing Date' onChange={({target}) => setExpirationDate(target.value)}/>
        <input type='text' placeholder='Url' onChange={({target}) => setImage(target.value)}/>
      </form>
      <div id='add-form-buttons-container'>
        <button form='addForm'>Share</button>
      </div>
    </div>
  );
};

export default AddForm;