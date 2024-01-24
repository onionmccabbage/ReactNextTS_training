import './App.css';
import Form from './FormStateObj'; // normal form fields with local state
import RandomUsersList from './RandomUsersList';
import PhotoList from './PhotoList';

function App() {
  const xval = 'working'
  return (
    <>
      <Form />
      <hr/>
    {/* review 2 - load photo albums with spinner for album ID */}
      <PhotoList />
      <hr/>
      <RandomUsersList />
      <hr/>
    </>
  );
}

export default App;
