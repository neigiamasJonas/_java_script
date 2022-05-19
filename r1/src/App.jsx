
import { useState } from 'react';
import './App.css';
import rand from './Functions/randNumber';


function App() {
/////// 1) ///////
const [forma, setForma] = useState('40px')

const keiciasi = () => {
  console.log(forma);
  setForma(old => old === '40px' ? '0px' : '40px');
}

/////// 2) ///////


const [forma2, setForma2] = useState('40px')
const [stat, setStat] = useState ('77px')

const keiciasi2 = () => {
  setForma2(old => old === '40px' ? '0px' : '40px');
  setStat(old => old === '77px' ? '140px' : '77px')
}

const [randomSkaicius, setRandomSkaicius] = useState()

const randomaizeris = () => setRandomSkaicius(rand(5,25));


  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>Uzdavinys nr:1</div>
          <div className='apskritimas' style={{borderRadius: forma}}></div>
          <button onClick={keiciasi}>Change</button>

          <div>Uzdavinys nr:2</div>
          <div className='apskritimas' style={{borderRadius: forma2, width: stat, color: 'black'}}>{randomSkaicius}</div>
          <button onClick={keiciasi2}>Change</button>
          <button onClick={randomaizeris}>Random</button>

        </header>
      </div>
    </>
  );
}

export default App;


// listai: katinai.map((k, i) => <div key={i}>{k}</div>)
// mygtukas kuri paspaudus atsiranda kvadratukas, antra kart paspaudus atsiranda du kvdr ir t.t.