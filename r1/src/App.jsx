import './App.scss';
import { useState } from 'react';
import Comp1 from './components/015-formos/comp1';
import Katinai from './components/015-formos/comp2';
import Santykis from './components/015-formos/comp3';
import Selektas from './components/015-formos/comp4';
import Range from './components/015-formos/comp5';
// import { v4 as uuidv4 } from 'uuid';
// // import rand from './Functions/randNumber';
// import randColor from './Functions/randColor';

function App() {

    const [text, setText] = useState('');       

    const inputText = e => {        // antras imput variantas onChange
        setText(e.target.value);
        console.log(e.target.value);
    }

//////////////// select //////////////

    const [select, setSelect] = useState('two')

//////////////// checkBox //////////////

    const [cb, setCb] = useState ({a: false, b: false, c: true, d: true})

    const cbClick = c => {
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}));
    }

//////////////// radioButton //////////////

    const [radio, setRadio] = useState('c')

//////////////// uzdavinys //////////////

    const [inputcolor, setInputcolor] = useState('')


  return (
    <>
      <div className="App">
        <header className="App-header">
        
        <input type="text" onChange={e => setText(e.target.value)} value={text}></input>

        <input type="text" onChange={inputText} value={text}></input> 

        <div style={{marginTop: '30px'}}></div>
{/* //////////////// select ////////////// */}

        <select value={select} onChange={e => setSelect(e.target.value)}>
            <option value="one">Vienas</option>
            <option value="two">Du</option>
            <option value="three">Trys</option>
            <option value="four">Keturi</option>
        </select>

        <div style={{marginTop: '30px'}}></div>
{/* //////////////// checkBox ////////////// */}

        <fieldset>
            <legend>Checkbox</legend>
                A<input type="checkbox" onChange={() => cbClick('a')} checked={cb.a}></input>
                B<input type="checkbox" onChange={() => cbClick('b')} checked={cb.b}></input>
                C<input type="checkbox" onChange={() => cbClick('c')} checked={cb.c}></input>
                D<input type="checkbox" onChange={() => cbClick('d')} checked={cb.d}></input>
        </fieldset>

        <div style={{marginTop: '30px'}}></div>
{/* //////////////// radioButton ////////////// */}

<fieldset>
            <legend>Radio Buttom</legend>
                A<input type="radio" name='r' value='a' onChange={e => setRadio(e.target.value)} checked={radio === 'a'}></input>
                B<input type="radio" name='r' value='b' onChange={e => setRadio(e.target.value)} checked={radio === 'b'}></input>
                C<input type="radio" name='r' value='c' onChange={e => setRadio(e.target.value)} checked={radio === 'c'}></input>
                D<input type="radio" name='r' value='d' onChange={e => setRadio(e.target.value)} checked={radio === 'd'}></input>
        </fieldset>

        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys ////////////// */}
        <div className='kv' style={{backgroundColor: inputcolor}}>color</div>
        {/* <input type="color" onChange={e => setInputcolor(e.target.value)} value={inputcolor === 'color'}></input> */}
        <input type="color" onChange={e => setInputcolor(e.target.value)} value={inputcolor}></input>




        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys 1) ////////////// */}
        <Comp1></Comp1>



        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys 2) ////////////// */}
        <Katinai></Katinai>




        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys 3) ////////////// */}
        <Santykis></Santykis>



        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys 4) ////////////// */}
        <Selektas></Selektas>



        <div style={{marginTop: '30px'}}></div>
{/* //////////////// uzdavinys 5) ////////////// */}
        <Range></Range>

        </header>
      </div>

    </>
  );
}

export default App;

// value={text} kontrole, kad value turi buti state
// onChange={e => setText(e.target.value)}

// radio button name vienodi - jie visi susieti. Jeigu pazymi viena, atsizymi kiti