
import { useState } from "react";
import "./App.scss";
import Suo from "./components/024-CONTEXT/suo";
import Duomenys from "./Contexts/Duomenys";


function App() {

    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(3);


  return (
    <Duomenys.Provider value={{counter1, counter2}}>
        <div className="App">
            <h1>CONTEXT</h1>
            <Suo></Suo>
            <button onClick={() => setCounter1(c => c + 1)}>+1</button>
            <button onClick={() => setCounter2(c => c + 3)}>+3</button>
        </div>
    </Duomenys.Provider>
  );
}

export default App;
