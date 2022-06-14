
import { useState, useEffect } from "react";
import "./App.scss";
import axios from 'axios';


function App() {

const [trees, setTrees] = useState([]);

useEffect(() => {

    axios.get('http://localhost:3003/medukai')
    .then(res => {
        setTrees(res.data)
    });

}, []);


  return (
    <div className="App">
      <h1>MARIJA featuring Medziai</h1>
      <div>
        {
            trees.map(t => <div key={t.id}>{t.title}</div>)
        }
      </div>
    </div>
  );
}

export default App;
