import { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = { productName, productDescription };
    axios
      .post('http://localhost:5000/products', products)
      .then((res) => console.log(res.data));
    window.location = '/';
  };
  return (
    <div>
      <h2>add product</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Product Name</label>
          <input
            type='text'
            className='form-control'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          ></input>
        </div>
        <div className='form-group'>
          <label>Product description</label>
          <textarea
            className='form-control'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button className='btn btn-md btn-info' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
