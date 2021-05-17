import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import All from './components/All';

function App() {
  return (
    <div className="container-fluid">
      <Header logo={logo} />
      <div className="container">
        <All />
      </div>
    </div>
  );
}

export default App;
