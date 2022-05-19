import { useState } from 'react';
import './App.css';
import randColor from './Functions/randColor.js';


const katinai = ['Pilkis', 'Murkis', 'Rainis'];

function App() {

  const [spalva, setSpalva] = useState('yellow');   // pirmas elementas - reiksme, antras - funkcija, kuri keicia reiksme. HOOK'as

  const keistiSpalva = () => {
    // const naujaSpalva = spalva === 'yellow' ? 'pink' : 'yellow' --- taip daryt galima tada, jeigu aplikacija yra maza, bet siaip nepatartina.
    // setSpalva(naujaSpalva);

    setSpalva(old => old === 'yellow' ? 'pink' : 'yellow'); // OLD gali buti bet kas.. cia tiesiog funkcija tokia

    console.log(spalva);    // log spalva console iskarto nerodo pink, o rodo yellow. antra kart rodo pink
  }

  const [skaicius, setSkaicius] = useState(1)
  const skaiciuotuvas = argumentas => setSkaicius(s => s + argumentas);

  // const mygtukas = () => {
  //   console.log('As grazus mygtukas');
  //   return mygtukoBrolis;
  // }

  // const mygtukoBrolis = () => {
  //   console.log('Mygtuko brolis');
  // }

  const beArgumentu = () => {
    console.log('Be argumentu');
  }

  const suArgumentu = ka => {
    console.log('Su argumentu: ' + ka);
  }

  ///////// LISTAI ////////////

  const [kv, setKv] = useState([]);

  const addKv = () => {
    setKv(k => [...k, randColor()])
  }

  const remKv = () => {
    setKv(k => k.slice(1));
  }





  return (
    <>
      <div className="App">
        <header className="App-header">
            <div style={{color: spalva}}>STATE {skaicius}</div>
            <div className='kvc'>
              {
                kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>)
              }

            </div>

            {
              katinai.map((k, i) => <div key={i}>{k}</div>)
            }
            {/* <button onClick={mygtukas()}>Press Me!</button> */}
            <button onClick={beArgumentu}>Be argumentu</button>
            <button onClick={() => suArgumentu('Labas')}>Su argumentu</button>
            <button onClick={keistiSpalva}>Kita spalva</button>
            <button onClick={() => skaiciuotuvas(1)}>+1</button>      
            <button onClick={() => skaiciuotuvas(-1)}>-1</button>
            <button onClick={addKv}>ADD [] kvadratas</button>
            <button onClick={remKv}>REMOVE [] kvadratas</button>
        </header>
      </div>
    </>
  );
}

export default App;


// listai: katinai.map((k, i) => <div key={i}>{k}</div>)
// mygtukas kuri paspaudus atsiranda kvadratukas, antra kart paspaudus atsiranda du kvdr ir t.t.