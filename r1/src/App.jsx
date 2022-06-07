import { useReducer, useState } from 'react';
import './App.scss';
import rand from './Functions/randNumber';
import colorReducer from './reducer/ColorReducer';
import NumberReducer from './reducer/NumberReducer';
import kvReducer from './reducer/kv'


function App() {

    // const [color, setColor] = useState('yellow');

    // const goPink = () => {
    //     setColor('pink')
    // }


    // REDUCER //

    const [color, dispachColor] = useReducer(colorReducer, 'red');

    const goPink = () => {
        const action = {
            type: 'go_pink'
        }

        dispachColor(action);
    }


    const goRed = () => {
        const action = {
            type: 'go_red'
        }

        dispachColor(action);
    }


    const goChange = () => {
        const action = {
            type: 'change_color'
        }

        dispachColor(action);
    }


    //////////////////////////////

    const [number, dispachNumber] = useReducer (NumberReducer, '0000')

    const randNr = () => {
        const action = {
            type: 'change_number'
        }

        dispachNumber(action);
    }

    //////////////////////////////
    

    const randNr2 = () => {
        const action = {
            type: 'change_number2',
            payload: rand(0, 1000)

        }

        dispachNumber(action);
    }

    //////////////////////////////

    const [bgColor, setBgColor] = useState()

    const clr1 = () => {
        const action = {
            type: 'change_background',
            payload: bgColor

        }

        dispachColor(action)
    }

    //////////////////////////////

    const [text, setText] = useState('');
    const [textDiv, setTextDiv] = useState('')

    const tekstas = () => {
        setTextDiv(text)        // i viena funkcija galima net tik reducint bet ir paleist kitus state

        const action = {
            type: 'nr_to_text',
            payload: text
        }

        dispachNumber(action)
    }

    //////////////////////////////

    const [kv, dispachKv] = useReducer(kvReducer, [])

    const kv1 = () => {
        
        const action = {
            type: 'kvkv',
        }

        dispachKv(action)
    }


  return (

    <div className="App" >
        <header className="App-header">
            <h3 style={{backgroundColor: color}}>REDUCER
                <span> {number} </span>
            </h3>
            <button onClick={goPink}>Go Pink</button>
            <button onClick={goRed}>Go Red</button>
            <button onClick={goChange}>Change Color</button>

            <button onClick={randNr}>Rand number</button>
            <button onClick={randNr2}>Rand number2</button>

            <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)}></input>
            <button onClick={clr1}>Change Background</button>

            <button onClick={tekstas}>Input text</button>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <div> {textDiv} </div>

            <button style={{marginTop: '25px'}} onClick={kv1}>Kvadratas</button>
            <div className='kvc'>
                    {
                        kv.map(a => <div className='kv'>{a}</div>)
                    }
            </div>
        </header>
    </div>
    
  )
}

export default App;