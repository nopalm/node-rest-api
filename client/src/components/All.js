import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';

const All = () => {
  const { error, data: products } = useFetch('http://localhost:5000/products');
  return (
    <div>
      <>{error && <div>{error}</div>}</>
      <div className='col-md-6'>
        {products && <ProductList products={products} />}
      </div>
    </div>
  );
};

export default All;
