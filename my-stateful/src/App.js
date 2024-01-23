import './App.css';
import Form from './FormStateObj';
import RandomUsersList from './RandomUsersList';
import PhotoList from './PhotoList';

function App() {
  return (
    <>
    {/* review 2 - load photo albums with spinner for album ID */}
      <PhotoList />
      <hr/>
      <RandomUsersList />
      <hr/>
      <Form />
    </>
  );
}

export default App;
