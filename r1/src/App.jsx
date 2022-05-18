import './App.css';
import Comp1 from './components/009/comp1';
import Hello from "./components/009/hello";

const kaka = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva='green' bg="yellow"></Hello>
        <Hello spalva='black' bg="green"></Hello>
        <Hello spalva='gray' bg="blue"></Hello>
        <Comp1 skaicius={33 + kaka}/>
      </header>
    </div>
  );
}

export default App;


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