import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import All from './components/All';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header logo={logo} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <All />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/products">
              <Product />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
