import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
import Product from './components/Product';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Header logo={logo} />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <User />
            </Route>
            <Route path='/products'>
              <Product />
            </Route>
            <Route path='/create'>
              <CreateProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
