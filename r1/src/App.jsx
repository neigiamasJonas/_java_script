import './App.css';
import Comp1 from './components/009/comp1';
import Hello from "./components/009/hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello></Hello>
        <Comp1/>
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