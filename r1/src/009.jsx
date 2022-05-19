import './App.css';
import Comp1 from './components/009/comp1';
import Hello from "./components/009/hello";
import Zuikis from './components/009/hw-1';
import Props from './components/009/hw_2_props';
import Number from './components/009/hw_3_props';
import DuTekstai from './components/009/hw_4_props';
import TrysPropeleriai from './components/009/hw_5_props';

const kaka = 1;

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Hello spalva='green' bg="yellow"></Hello>
          <Hello spalva='black' bg="green"></Hello>
          <Hello spalva='gray' bg="blue"></Hello>
          <Comp1 skaicius={33 + kaka}/>
        </header>
      </div>
      <div>
        <Zuikis/>
        <Props tekstas="Bet koks tekstas"/>
        <Number skaicius={2}/>
        <DuTekstai tekstasH1='Pirmas propsas, kurio tekstas h1' tekstasH2='Antras propsas, kurio tekstas h2'/>
        <TrysPropeleriai pirmas='Pirmas h1 tekstas' antras='Antras h2 tekstas' trecias='green'/>
      </div>
    </>
  );
}

// export default App;


// jsx  - js + html
// x - xml
// xml - grieztesne html atmaina
// xml - visi tagai kurie atsidare - privalo buti uzdaryti!!!
//                                        <img></img>

// index.js UZKOMENTINTI 9 ir 11 eilutes  // <React.StrictMode>
                                          // </React.StrictMode>


// react susideda is keliu burtazodziu
// 1) component'as
// 2) props'as
// 3) state


//     COMPONENT - tai FUNKCIJA kuri grazina HTML.
//                  a) Funkcijos (komponento) pavadinimas turi prasidedi didziaja raide.
//                  b) Viena funkcija - vienas failas. Faila vadinsime taip kaip uzsivadina component.


//     PROPS - jeigu komponentas yra funkcija, tai PROPS yra funkcijos argumentas.
//              a) <Hello spalva='green'/> yra propsas

// stringa galima paversti skaiciumi pidejus + zenkla (nes nera taigiamo stringo)