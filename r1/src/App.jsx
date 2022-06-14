
import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
import './App.scss';
import booksReducer from './reducer/BooksReducer';
import typeReducer from './reducer/BookTypeReducer';



function App() {

const [books, setBooks] = useState([]);

useEffect(() => {
    axios.get('http://in3.dev/knygos/')
    .then(res => {
        setBooks(res.data)
    })
}, []);

////////////////////

const [bookList, dispachbookList] = useReducer(booksReducer, []);
const [typeList, dispachTypeList] = useReducer(typeReducer, []);

useEffect(() => {
    axios.get('http://in3.dev/knygos/')
    .then(res => {

        const action = {
            payload: res.data,
            type:'get_from_server'
        }
        dispachbookList(action)
    })

    axios.get('https://in3.dev/knygos/types/')
    .then(res => {

        const action = {
            type: 'get-type-from-server',
            payload: res.data
        }
        dispachTypeList(action)
    })
}, []);

const sortBooks = () => {

    const action = {
        type:'sortBooks',
        
    }
    dispachbookList(action)
}

const unsortBooks = () => {

    const action = {
        type:'unsortBooks',
        
    }
    dispachbookList(action)
}

const price13 = () => {

    const action = {
        type: 'price13'
    }
    dispachbookList(action)
}


const priceUnsort = () => {

    const action = {
        type: 'unsortPrice'
    }

    dispachbookList(action)
}

  return (

    <div className="App" >
        <header className="App-header">
            <h3>Reducer+++</h3>
            <div>
                {
                    books.length ? books.map(b => <div key={b.id}>{b.title}</div>) : <h2>Loading...</h2>
                }
            </div>
            <div style={{marginBottom: "50px"}}></div>
            <div>
                {
                   bookList.length ? bookList.map(b => b.show ? <div key={b.id}>{b.title} {b.price} EUR
                   {
                    typeList.map(t => b.id === t.id ? <div style={{marginLeft: '30px', marginBottom: '20px'}} key={t.id}>Tipas: {t.title}</div> : null)
                   }
                   
                   </div> : null) : <h2>Loading...</h2>
                }
            </div>
            <div style={{marginBottom: "50px"}}></div>
            <button onClick={sortBooks}>Sort by Title</button>
            <div style={{marginBottom: "50px"}}></div>
            <button onClick={unsortBooks}>Unsort</button>
            <div style={{marginBottom: "50px"}}></div>
            <button onClick={price13}>Price bigger than 13eu</button>
            <div style={{marginBottom: "50px"}}></div>
            <button onClick={priceUnsort}>Unsort prices</button>
            <div style={{marginBottom: "50px"}}></div>


        </header>
        

    </div>
    
  )
}

export default App;


// rodyti brangesnes nei 13 eu knyga + reset
// knygu reload mygtukas (isnaujo atsiuncia knygas is serverio) useEffect naudot + useState
// salia knygos atspausdinti jos kategorija (nauja reduceri ir effecta naudot, nes type yra nr, o nr reprezentuotas kitoj bazej)