import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NoteDiv from './components/NoteDiv';
import Footer from './components/Footer';

function App() {

  const [notes, setNotes] = useState([]);
  const [isAddTransition, setIsAddTransition] = useState(false);

  useEffect(() => {
    axios.get('/api/items')
    .then( response => {
      setNotes(response.data);
    })
    .catch( error => {
      console.log(error);
    })
  }, [notes])

  function handleAdd (newItem) {
    axios.post('/api/items', newItem)
      .then(function (response) {
        console.log(response, 'post');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleDelete (id) {
    axios.delete('/api/items/' + id)
      .then(function (response) {
        console.log(response, 'delete');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='App'>
      <Header />
      <NoteInput
        notes={notes}
        handleAdd={(newItem) => handleAdd(newItem)}
        setIsAddTransition={(boolValue) => setIsAddTransition(boolValue)}
      />
      <NoteDiv 
        notes={notes}
        handleDelete={(id) => handleDelete(id)}
        isAddTransition={isAddTransition}
        setIsAddTransition={(boolValue) => setIsAddTransition(boolValue)}
      />
      <Footer />
    </div>
  );
}

export default App;
