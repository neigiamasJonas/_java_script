// 5. Sukurti komponentą su dviem range tipo įvedimais, vienu color įvedimu ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.
import { useState } from 'react';
import './comp5.scss';

function Range() {

    const [ilgis, setIlgis] = useState('100')
    const [plotis, setPlotis] = useState('100');

    return (
        <>
        <div style={{margin: '40px 0px'}}>Range, color + kvadratas</div>
        <fieldset className='field'>
            <label className='label'>Ilgis</label>
            <input type="range" min='10' max='200' value={ilgis} onChange={e => setIlgis(e.target.value)}></input>



            <label className='label'>Plotis</label>
            <input type="range" min='10' max='200' value={plotis} onChange={e => setPlotis(e.target.value)}></input>



            <input type='color' className='color'></input>

            <button>Sukurti</button>
            <button>Issaugoti</button>
        </fieldset>

        </>
    )
}

export default Range;