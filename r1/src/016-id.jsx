import './App.scss';
import { useState } from 'react';
import getId from './Functions/getid';

////////// CRUD - Creat Read Update Delete ////////



function App() {

  const [kv, setKv] = useState([]);
  const add = () => {
    setKv(a => [...a, getId('kv')])         // ji galima pavindt kaip noriu.
    // setKv(a => [...a, {id: getId('kv'), name: 'Jonas'}]);
  }


  return (
    <>
      <div className="App">
        <header className="App-header">
            <div>CRUD</div>
            <div className='kvc'>
              {
                kv.map((v, i) => <div key={i} className={'kv'}>{v}</div>)
              }
            </div>
            <button onClick={add}>Prideti</button>


        </header>
      </div>

    </>
  );
}

export default App;