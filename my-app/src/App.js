import logo from './logo.svg';
import './App.css';

function App() {
  // React uses JSX to write html within JavaScript
  return (
    // react provides this for single-nesting
    <>
    {/* we must say 'className' rather than 'class' for CSS */}
      <div className="App">
        <h2>Nearly Coffee Time</h2>
        <div>
          <p>lovely</p>
        </div>
      </div>

    </>



  );
}

export default App;
