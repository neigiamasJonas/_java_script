import './App.scss';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import rand from './Functions/randNumber';

///////// useRef Tasks //////////

const cats = [
    'Mulkis',
    'Kakius',
    'Pilkius',
    'Balčius'
];

const dog = [
    'Sniego',
    'Dingo',
    'Atsirado',
    'Pifas',
    'Bobikas'
];
// paspaudus mygtuka, atvaizduoti katinukus


function App() {

    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    // PIRMAS KROVIMAS
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
        istorija.current.unshift(kv);
    }, [kv]);


    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('^o^');
        }
        setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }

    const isvalyti = () => {
        setKv([]);
    }

    const atgal = () => {
        let senas = istorija.current.shift();
        if (!senas) {
            setKv([]);
        } else if (senas.length === kv.length) {
            senas = istorija.current.shift();
            if (!senas) {
                setKv([]);
            } else {
                setKv(senas);
            }
        }
        else {
            setKv(senas);
        }
        
    }
///////////////////////////////////////////////////////////////////
const [kates, setKates] = useState([]);


const addCats = () => {
    setKates(k => [...k, ...cats])
    console.log(kates);
}
const addDogs = () => {
    setKates([...dog]);
    console.log(dog);
}
const remove = () => {
    setKates([]);
}

  return (
    <>
    <div className="App">
        <header className="App-header">
        <div className='kvc'>
            {
                kv ? kv.map((v, i) => <div className='kv' key={i}>{v}</div>) : null
            }
        </div>
        <button onClick={prideti}>Prideti</button>
        <button onClick={isvalyti}>Isvalyti</button>
        <button onClick={atgal}>Atgal</button>


        <button onClick={addCats} style={{marginTop:'50px'}}>Katinai</button>
        <button onClick={addDogs} style={{margin:'10px 0px'}}>Sunys</button>
        <button onClick={remove}>Remove</button>
        <div style={{textAlign:'justify'}}>
        {
            kates.map((a, i) => <li key={i}>{a}</li>)
        }
        </div>

        
 
        
        </header>
    </div>
    </>
  )
}

export default App;