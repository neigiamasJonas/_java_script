
import { useState } from "react";
import { useReducer } from "react";
import "./App.scss";
import ld from "./reducer/ld";



const masyvas = [

    {id:3, name: 'Peter', bid: 487.77, date: '2022-06-01T10:37'},
    {id:7, name: 'Mary', bid: 125.33, date: '2022-06-01T11:37'},
    {id:8, name: 'Ūkas', bid: 78.25, date: '2022-06-01T09:22'},
    {id:9, name: 'Petras', bid: 487.77, date: '2022-06-01T08:13'}

];

function App() {

    const [list, dispatchList] = useReducer(ld, masyvas);

    const [select, setSelect] = useState('1')

  return (
    <div className="App">
      <h1>PAPRASTASIS SORTAS</h1>
      <select value={select} onChange={e => setSelect(e.target.value)}>
        <option value="date_asc">Date ASC</option>
        <option value="date_dsc">Date DSC</option>
        <option value="bid_asc">Bid ASC</option>
        <option value="bid_dsc">Bid DSC</option>
        <option value="name_asc">Name ASC</option>
        <option value="name_dsc">Name DSC</option>
        <option value="random">RAND</option>
      </select>
      <div>
        {
            list.map(b => (
                <div style={{display: 'flex', gap: '50px', justifyContent: "center", marginTop: "20px"}}>
                    <span>ID: {b.id}</span>
                    <span>{b.name}</span>
                    <span>{b.bid}</span>
                    <span>{b.date}</span>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default App;