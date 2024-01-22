import logo from './logo.svg';
import './App.css';
// we can import our own modules
// { } lets us import any export
// no braces needed for default import
import Profile from './Profile';
import {dummy,} from './Profile';

// here we can declare other stuff, such as components
// NB all React component names should begin with a Capital ie PascalCase

export default App;

function App() {
  // React uses JSX to write html within JavaScript
  return (
    // react provides this for single-nesting
    <>
      {/* we must say 'className' rather than 'class' for CSS */}
      <div className="App">
        {/* we can render ANY component */}
        {/* here we use {} to inject props into React component */}
        {/* then we declare a static ES object using {} */}
        <Profile person={ {name:'Alice', source:'https://i.imgur.com/jA8hHMpm.jpg'} } />
        <Profile person={ {name:'Gregor', source:'https://i.imgur.com/7vQD0fPs.jpg'} } />
      </div>

    </>
  );
}

