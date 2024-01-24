import './App.css';
import { useState } from 'react'
import Form from './FormStateObj'; // normal form fields with local state
import RandomUsersList from './RandomUsersList';
import PhotoList from './PhotoList';

function App() {
  const xval = 'working'
  // we can control the sdtate of the child form 'firstname' as fn here
  const [firstn, setFirstn] = useState('Matilda')
  return (
    <>
      <h3>{firstn}</h3>
      <Form fn={firstn}/>
      <hr/>
    {/* review 2 - load photo albums with spinner for album ID */}
      <PhotoList fn={firstn} />
      <hr/>
      <RandomUsersList />
      <hr/>
    </>
  );
}

export default App;
