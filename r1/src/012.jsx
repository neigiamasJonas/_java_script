import './App.scss';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import randColor from './Functions/randColor.js';



function App() {

    const [count, setCount] = useState(null);

    const mano = useRef(0);     // patampa objektu su vienintele savybe - current

    const panda2 = useRef();


    ///////////////////////////////////////////////////
    // prispaudus plius viena parefreshinus puslapi liks paskutine verte. localStorage + useEffect
    // pirma karta uzsikraunant //
    useEffect(() => {
        setCount(parseInt(localStorage.getItem('count') ?? 0)); // ?? priskiria default reiksme
                                                                // parseInt yra funkcija, kuri pakeicia i skaiciu
    }, [])
    
    // refreshinant puslapi, kai skaiciuoja count'a
    useEffect(() => {
        if (count === null) {
            return;
        }
        localStorage.setItem('count', count)
    }, [count])

    ///////////////////////////////////////////////////
    const add = () => {
        setCount(c => c + 1);
        // setCount(c => c + 1);
        mano.current = mano.current + 3;
        console.log(mano.current);

        const p = document.querySelector('#panda');     // reacte sito nenaudot
        console.log(p.dataset.panda);

        const p2 = panda2.current                       // naudot sitaip elemento suradimui
        console.log(p2.dataset.panda2);
    }


    const addCat = () => {
        localStorage.setItem('katinukas', JSON.stringify(['Murka', 'ilgis'])); // idejimas i localStorage
    }                                                                          // dedant masyva ar kita objekta reikia stringify!!

    const getCat = () => {
        console.log(localStorage.getItem('katinukas'));
        console.log(JSON.parse(localStorage.getItem('katinukas')));     // reikia isparse masyva
    }

    const remCat = () => {
        localStorage.removeItem('katinukas');
    }

/////////////////////////////////////////////////////////////////
const [kv, setKv] = useState(null);

const addKv = () => {
    setKv(k => [...k, randColor()]);
}

const remKv = () => {
    setKv(k => k.slice(1));
}

useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
}, []);

useEffect(() => {
    if (null === kv) {
        return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
}, [kv]);

  return (

    <div className="App">
        <header className="App-header">
            <h1>useRef LocalStorage {count}</h1>

            <button onClick={add}>+1</button>
            
            <div id='panda' data-panda="miega"></div>
            <div ref={panda2} data-panda2="nemiega"></div>


            <button onClick={addCat}>addCat</button>
            <button onClick={getCat}>getCat</button>
            <button onClick={remCat}>remCat</button> 

            {/* ////////////////////////////////////////  */}
            <button onClick={addKv}>ADD []</button>
            <button onClick={remKv}>REMOVE []</button>
            <div className="kvc">
                {
                    kv ? kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>) : null
                }
                </div>
        </header>
    </div>
    
  )
}

export default App;

// html galime saugoti info.. <p data-.......="kazkas"> pasiekiama su dataset.
// <div id='panda' data-panda>22</div>  p.dataset.panda  (bus lygu 22)


// local storage - narshykles futures. Jie turi key / value (abu gali buti stringai)