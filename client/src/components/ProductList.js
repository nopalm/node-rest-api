import React from 'react';

const ProductList = ({ products }) => {
  let i = products.length;
  return (
    <div>
      <h1>Data Products</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products
            .map((product) => (
              <tr key={product._id}>
                <th scope="row"> {i--} </th>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>
                  <button className="btn btn-info btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
