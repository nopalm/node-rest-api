const AllProductList = ({ products }) => {
  return (
    <div>
      <h1>Product</h1>
      {products.map((product) => (
        <div className='card' key={product._id}>
          <div className='card-body'>
            <h3 className='card-text'>{product.productName}</h3>
            <p className='card-text'>{product.productDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProductList;
