import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'
// we can import our own modules
// { } lets us import any export
// no braces needed for default import
import Profile from './Profile';
import { dummy, } from './Profile';

import { people } from './static_data/scientists'
import { getImageUrl } from './util/imageUtil';
import BankNotes from './BankNotes';
import BrownComp from './BrownComp';

// here we can declare other stuff, such as components
// NB all React component names should begin with a Capital ie PascalCase

// this is the most common way to write an export
export default function App() {
  const xval = 1, yval = true
  const doStuff = (msg = 'Works') => {
    alert(msg)
  }
  // we can write plain old ECMAScript here
  const chemists = people.filter((person) => {
    return person.profession === 'chemist' // = sets equality, == checks equality, === checks identity
  })
  // then...
  const listItems = chemists.map((person) => { // or people for all of them
    return (
      // any repeating elements should take a unique key
        // if we reaely want NO tag around our content, use a Fragment (with key)
        <Fragment key={person.id}>
          <img src={getImageUrl(person)} alt={person.name} title={person.name} />
          <p>{person.name} known for {person.accomplishment}</p>
        </Fragment>
    )
  })
  // React uses JSX to write html within JavaScript
  return (
    // react provides this for single-nesting (it gets removed)
    <>
      {/* <BrownComp x={xval} y={yval} action={()=>{alert("WOW")}} /> */}
      {/* <BrownComp x={xval} y={yval} action={() => { doStuff('Again') }} /> */}
      <BrownComp x={xval} y={yval} action={doStuff} />
      {/* we must say 'className' rather than 'class' for CSS */}

      {/* we can render ANY component */}
      <BankNotes />
      {/* here we use {} to inject props into React component */}
      {/* then we declare a static ES object using {} */}
      {/*         
        <Profile person={ {name:'Alice', source:'https://i.imgur.com/jA8hHMpm.jpg'} } />
        <Profile person={ {name:'Gregor', source:'https://i.imgur.com/7vQD0fPs.jpg'} } />
         */}

      {/* we will now iterate over the 'people' which were imported from 'scientists.js */}
      {/* our data is in an array, and arrays have 'map' and 'filter' built-in */}
      <ul>
        {/* we use <ul> or <ol> to contain <li> */}
        {listItems}
      </ul>


    </>
  );
}

