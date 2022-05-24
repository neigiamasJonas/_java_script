import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Books from './components/011/books';
import axios from 'axios';




function App() {

    const [count, setCount] = useState(1);
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect (() => {
      console.log('Yes'); // signalas READY! - tuscio masyvo pridejimas

      axios.get('https://in3.dev/knygos/')  // kai serveris ready jis kreipiasi i duomenis ((npm i axios))
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })

    }, [count])           // kai irasau count, jis paleidineja keiciantis count (consoleje)


    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
          setUsers(res.data);
      })
  }, []);

  return (

    <div className="App">
        <header className="App-header">
            <h1>{count}</h1>
            <button className='button' onClick={() => setCount (c => c + 1)}>+1</button>

            <Books books={books}></Books>
            <div>
              {
                users.map(v => <div key={v.id}>{v.name}</div>)
              }
            </div>
        </header>
    </div>
    
  )
}

export default App;


// hookai - useState, useEffect