import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products }) => {
  let i = products.length;
  const handleDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete('http://localhost:5000/products/' + id)
      .then((res) => console.log(res.data));
    window.location = '/products';
  };

  return (
    <div>
      <h1>Data Products</h1>
      <NavLink className='btn btn-primary btn-sm' to='/create'>
        Add Product
      </NavLink>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Product Desc</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {products
            .map((product) => (
              <tr key={product._id}>
                <th scope='row'> {i--} </th>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>
                  <NavLink
                    className='btn btn-info btn-sm'
                    to={'/edit/' + product._id}
                  >
                    Edit
                  </NavLink>
                  <NavLink
                    className='btn btn-danger btn-sm'
                    onClick={(e) => handleDelete(product._id, e)}
                    to={'/products/' + product._id}
                  >
                    Delete
                  </NavLink>
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
