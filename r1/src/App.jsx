import { useReducer } from 'react';
import './App.scss';
import rand from './Functions/randNumber';
import randListReducer from './reducer/RandNumberList';


function App() {


const [list, dispachList] = useReducer(randListReducer, [])

const listGo = () => {

    const action = {
        type: 'listas'
    
    }

    dispachList(action)
}

const sortList = () => {

    const action = {
        type: 'sort'
    }

    dispachList(action);
}

const filterHigh = () => {

    const action = {
        type: 'filterH'
    }
    dispachList(action);
}

const filterLow = () => {

    const action = {
        type: 'filterL'
    }
    dispachList(action);
}

const filterReset = () => {

    const action = {
        type: 'filterReset'
    }
    dispachList(action);
}

const sortReset = () => {

    const action = {
        type: 'sortReset'
    }
    dispachList(action);
}

const addNumber = () => {

    const action = {
        type: 'addNumber'
        
    }
    dispachList(action);
}


const delKv = (n) => {

    const action = {
        type: 'delKv',
        payload: n
        
    }
    dispachList(action);
}


  return (

    <div className="App" >
        <header className="App-header">
            <h3>Reducer++</h3>
            <div style={{marginBottom: '20px'}}>UZDAVINIAI</div>

            <div style={{marginBottom: '20px'}}>1+</div>
            <button onClick={listGo}>Ganerate 10 rand</button>
            <div style={{marginBottom: '10px'}}></div>
            <button onClick={addNumber}>Add number</button>
            <div className='kvc'>
                {
                    list.map((v, i) => v.show ? <div key={i} style={{margin: "20px", backgroundColor: v.color}} className={'kv'} onClick={() => delKv(v.number)}>{v.number} </div> : null)
                }
            </div>
            <button onClick={sortList}>Sort list</button>
            <button onClick={sortReset}>Sort reset</button>
            <div style={{marginBottom: '20px'}}></div>

            <button onClick={filterHigh}>didesni nei 5000</button>
            <button onClick={filterLow}>maziau nei 4000</button>
            <button onClick={filterReset}>Filter Reset</button>
        </header>
        

    </div>
    
  )
}

export default App;

///// UZDUOTIS /////

// paspaudus kvadratuka jis dingsta, paspaudus reset Filter vel atsiranda

//  padaryti input laukeli i kuri irasius kvadratuko skaiciu ir paspaudus dar viena sukurta mygtuka, kvadratukas su tuo skaicium isnyksta

// padaryti gyva filtracija. Prideti input (type:range) nuo 0 iki 9999. Slankiojant range turi iskarto filtruotis kvadratukai.