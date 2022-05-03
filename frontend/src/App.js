import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const makeApiRequest = () => {
    console.log('makeApiRequest');
    axios("/api/testwithcurrentuser").then(response => {
      console.log('response', response);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world Artyr 333</p>
      </header>
      <button onClick={makeApiRequest}>Make api request</button>
    </div>
  );
}

export default App;
