import './App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import rand from './Functions/randNumber';
import randColor from './Functions/randColor';

function App() {

    const [avys, setAvys] = useState([]);

    const newA = () => {
        const avis = {
            id: uuidv4(),
            color: randColor(), 
            where: 'ganykla'
        };

        setAvys(a => [...a, avis]);
    }


    const go = id => {
        setAvys (a => {                                                                         // aviu dejimas i gala is eiles
            const avis = a.filter(av => av.id === id)[0];       // is masyvo reikalinga viena - pirma[0]
            avis.where = 'kirpykla'
            const kitos = a.filter(av => av.id !== id);         // visas masyvas reikalingas
            return [...kitos, avis];
        })
        
        
        // setAvys(a =>  a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis))    // avies dejimas pagal savo vieta
    }
    

  return (
    <>
      <div className="App">
        <header className="App-header">
        <div className='kvc'>
            {
                avys.filter(a => a.where === 'kirpykla').map(a => <div key={a.id} className='kv' style={{backgroundColor: a.color}}></div>)
            }
            </div>
            <h1>Avys</h1>
            <div className='kvc'>
            {
                avys.filter(a => a.where === 'ganykla').map(a => <div onClick={() => go(a.id)} key={a.id} className='kv' style={{backgroundColor: a.color}}></div>)
            }
            </div>
            <button onClick={newA}>Naujas Avinas</button>
        </header>
      </div>

    </>
  );
}

export default App;