import React from 'react';
import useFetch from '../hooks/useFetch';
import UserList from '../components/UserList';
import ProductList from '../components/ProductList';

const All = () => {
  const { error, data: users } = useFetch('http://localhost:5000/users');
  const { data: products } = useFetch('http://localhost:5000/products');
  return (
    <div>
      <>{error && <div>{error}</div>}</>
      <div className="col-md-6">{users && <UserList users={users} />}</div>
      <div className="col-md-6">
        {products && <ProductList products={products} />}
      </div>
    </div>
  );
};

export default All;
