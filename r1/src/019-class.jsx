import Counter from './components/019/counter';
import './App.scss';


function App() {



  return (

    <div className="App">
        <header className="App-header">
          <h2>Class'es</h2>
          <Counter when={"today"}></Counter>

          <svg>
            <use href='#star'></use>
          </svg>
        </header>
    </div>
    
  )
}

export default App;