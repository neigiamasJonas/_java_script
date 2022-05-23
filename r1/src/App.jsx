
import { useState } from 'react';
import './App.css';
import Bala from './components/011/bala';
import Daiktas from './components/011/daiktas';
import Tvenkinys from './components/011/tvenkinys';
import rand from './Functions/randNumber';


function App() {
/////// 1) /////// REACT CLASS STATE ///////
const [forma, setForma] = useState('40px')

const keiciasi = () => {
  console.log(forma);
  setForma(old => old === '40px' ? '0px' : '40px');
}

/////// 2) /////// REACT CLASS STATE ///////


const [forma2, setForma2] = useState('40px')
const [stat, setStat] = useState ('77px')

const keiciasi2 = () => {
  setForma2(old => old === '40px' ? '0px' : '40px');
  setStat(old => old === '77px' ? '140px' : '77px')
}

const [randomSkaicius, setRandomSkaicius] = useState()

const randomaizeris = () => setRandomSkaicius(rand(5,25));



/////// 3) /////// REACT CLASS STATE ///////


const [skaicius, setSkaicius] = useState(0)

const prideduAtemu = argumentas => setSkaicius(a => a + argumentas);


/////// 4) /////// REACT CLASS STATE ///////

const [kvdrt, setKvdrt] = useState([]);

const plius = () => {
  setKvdrt(a => [...a, a])
  console.log(kvdrt);
}


/////// 5) /////// REACT CLASS STATE ///////

const [kvdrt2, setKvdrt2] = useState([]);

const pliusRed = () => {
  setKvdrt2(a => [...a, a])
}

const [kvdrt3, setKvdrt3] = useState([]);

const pliusBlue = () => {
  setKvdrt3(a => [...a, a])
}

const dingau = () => {
  setKvdrt2(a => a.slice(Infinity));
  setKvdrt3(b => b.slice(Infinity));
}





/////// 1) /////// REACT BASE LIST ////////

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

/////// 2) /////// REACT BASE LIST ////////

const dogsSort = dogs.sort((a, b) => {return b.length - a.length})

/////// 3) /////// REACT BASE LIST ////////

const dogsNelyginiai = [];
const dogsLyginiai = [];

for (let i = 0; i < dogsSort.length; i++) {
  if (i % 2 === 0) {
    dogsNelyginiai.push(dogsSort[i])
  } else {
    dogsLyginiai.push(dogsSort[i])
  }
}
console.log(dogsNelyginiai);
console.log(dogsLyginiai);

// tiksliau atlikta uzduotis yra apacioje su ifais


/////// 4) /////// REACT BASE LIST ////////

//  ieskant ar zodis prasideda didziaja raide     (atlikta uzduotis yra apacioje)
//    \/\/\/
//    \/\/\/
//          if (v.charAt(0) === v.charAt(0).toUpperCase())     /////



/////// 5) /////// REACT BASE LIST ////////


// padaryta apacioje


  return (
    <>
      <div className="App">
        <header className="App-header">
          <div style={{marginTop: "20px"}}>Uzdavinys nr:1</div>
          <div className='apskritimas' style={{borderRadius: forma}}></div>
          <button onClick={keiciasi}>Change</button>

          <div style={{marginTop: "20px"}}>Uzdavinys nr:2</div>
          <div className='apskritimas' style={{borderRadius: forma2, width: stat, color: 'black'}}>{randomSkaicius}</div>
          <button onClick={keiciasi2}>Change</button>
          <button onClick={randomaizeris}>Random</button>

          <div style={{marginTop: "20px"}}>{skaicius}</div>
          <button onClick={() => prideduAtemu(1)}>+</button>
          <button onClick={() => prideduAtemu(-1)}>-</button>

          <div className='kvc'>
            {
              kvdrt.map((v, i) => <div className='apskritimas' style={{backgroundColor:'blue', color:"blue"}} key={i}>{i}</div>)
            }
          </div>
          
          <button style={{display: 'flex'}} onClick={plius}>ADD</button>
          

          <div className='kvc'>
          {
            kvdrt3.map((v, i) => <div className='kvblue' style={{color:"blue"}} key={i}>{i}</div>)
          }
          {
            kvdrt2.map((v, i) => <div className='kv' style={{color:'crimson'}} key={i}>{i}</div>)
          }
          </div>
          <button style={{display: 'flex'}} onClick={pliusBlue}>ADD BLUE</button>
          <button style={{display: 'flex'}} onClick={pliusRed}>ADD RED</button>
          <button style={{display: 'flex', marginBottom:'60px'}} onClick={dingau}>REMOVE</button>

{/* REACT BASE LIST */}
{/* 1 uzdavinys */}
          <div>
            {
              dogs.map((v, i) => <div className='apskritimas' style={{color:'black', width:'100px'}} key={v}>{v}</div>)
            }
          </div>
{/* 2 uzdavinys */}
          <div style={{marginTop:'80px'}}>
            {
              dogsSort.map((v, i) => <div className='apskritimas2' key={v}>{v}   {i+1}</div>)
            }
          </div>
{/* 3 uzdavinys */}
          <div style={{marginTop:'80px'}}>
            {
              dogsNelyginiai.map((v, i) => <div className='apskritimas' style={{color:'black', width:'100px'}} key={v}>{v}</div>)
            }
            {
              dogsLyginiai.map((v, i) => <div className='apskritimas2' style={{color:'black', width:'100px'}} key={v}>{v}</div>)
            }
          </div>

          <div style={{marginTop:'80px'}}>
            {
              dogsSort.map((v, i) => {
                if (i % 2 === 0) {
                  return <div className='apskritimas3' key={v}>{v}   {i+1}</div>
                } else if (i % 2 !== 0) {
                  return <div className='apskritimas2' key={v}>{v}{i+1}</div>
                }
                return console.log();
              })
            }
          </div>
{/* 4 uzdavinys */}
          <div style={{marginTop:'80px'}}>
            {
              dogsSort.map((v, i) => {
                if (v.charAt(0) === v.charAt(0).toUpperCase()) {
                  return <div className='apskritimas2' key={v}>{v}   {i+1}</div>
                }
                return console.log();
              })
            }
          </div>
{/* 5 uzdavinys */}
          <div style={{marginTop:'50px'}}>
            {
              dogs.map((v, i) => {
                i = v.length
                console.log(i);
                if (i > 6) {
                  return <div className='apskritimas2' style={{color:'green'}} key={v}>{i}</div>
                } else {
                  return <div className='apskritimas2' style={{color:'red'}} key={v}>{i}</div>
                }
              })
            }
          </div>


{/* 1 uzdavinys */}
            <Bala/>
          
{/* 2 uzdavinys */}
            <Tvenkinys/>
            <Daiktas/>
          
        </header>
      </div>
    </>
  );
}

export default App;


// listai: katinai.map((k, i) => <div key={i}>{k}</div>)
