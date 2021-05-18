import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

const Product = () => {
  const { error, data: products } = useFetch('http://localhost:5000/products');
  return (
    <div>
      <>{error && <div>{error}</div>}</>
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Product;
