import logo from './logo.svg';
import './App.css';
import ImageComponent from './Pages/InnerComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 233
        </a>
      </header>
    </div>
  );
}

export default App;
