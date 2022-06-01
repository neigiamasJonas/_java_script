// 5. Sukurti komponentą su dviem range tipo įvedimais, vienu color įvedimu ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.
import { useState } from 'react';
import './comp5.scss';

function Range() {

    const [aukstis, setAukstis] = useState();
    console.log(aukstis);
    const [plotis, setPlotis] = useState();


    const [array, setArray] = useState([]);
    const click = () => {
        setAukstis(100);
        setPlotis(100);
        setInputColor('#777');
    }

    const [inputColor, setInputColor] = useState('');


    // issaugoti viena kvadraciuka
    const save = () => {
        const copyArray = [...array]
        copyArray.push({'Aukstis': aukstis,'Plotis': plotis,'Spalva': inputColor});
        setArray(copyArray);

        setAukstis();
        setPlotis();
        setInputColor();

        localStorage.setItem("pavadinimas", JSON.stringify(copyArray));
    }

    // norint, kad refreshinus liktu kvadratas, reikia per useEffect parse copyArray



    return (
        <>
        <div style={{margin: '40px 0px'}}>Range, color + kvadratas</div>
        <fieldset className='field'>
            <label className='label'>Aukstis px</label>
            <input type="range" min='10' max='200' value={aukstis} onChange={e => setAukstis(e.target.value)}></input>



            <label className='label'>Plotis px</label>
            <input type="range" min='10' max='200' value={plotis} onChange={e => setPlotis(e.target.value)}></input>



            <input type='color' className='color' value={inputColor} onChange={e => setInputColor(e.target.value)}></input>

            <button onClick={click}>Sukurti</button>
            <button onClick={save}>Issaugoti</button>

        </fieldset>
        <div style={{margin: '40px 0px'}}>
            {
                array.map((v, i) => <div key={i} className='kv' style={{width: v.Plotis + 'px', height: v.Aukstis + 'px', backgroundColor: v.Spalva}}></div>)
            }
            {
                aukstis && plotis && inputColor && <div className='kv' style={{width: plotis + 'px', height: aukstis + 'px', backgroundColor: inputColor}}></div>
            }
        </div>

        </>
    )
}

export default Range;