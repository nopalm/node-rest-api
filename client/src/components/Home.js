import useFetch from '../hooks/useFetch';
import AllProductList from './AllProductList';
const Home = () => {
  const { error, data: products } = useFetch('http://localhost:5000/products');
  return (
    <div>
      <>{error && <div>{error}</div>}</>
      <div className='col-md-6'>
        {products && <AllProductList products={products} />}
      </div>
    </div>
  );
};

export default Home;
