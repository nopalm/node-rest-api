import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Data Products</h1>
      {products.map((product) => (
        <div className="card" key={product._id}>
          <div className="card-body">
            <p className="card-text">product name : {product.productName}</p>
            <p className="card-text">
              product desc : {product.productDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
