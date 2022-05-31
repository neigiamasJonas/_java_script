// 4. Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.

import { useState } from "react";

function Selektas() {
    // colors
    const [color, setColor] = useState(null);

    // font size
    const [font, setFont] = useState(null);
 
    // font familly
    const [fonts, setFonts] = useState(null);

    const [text, setText] = useState('');

    const inputText = e => {
        const text2 = e.target.value;
        setText(text2);
    }

    return(
        <>
        <div style={{marginTop: '30px'}}>Select with Options</div>
            <fieldset style={{display: "block"}}>
                <select value={color} onChange={e => setColor(e.target.value)} style={{display: "block", margin: "15px 0px"}}>
                    <option value={'red'}>Red</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'orange'}>Orange</option>
                    <option value={'green'}>Green</option>
                    <option value={'black'}>Black</option>
                </select>
                <select value={font} onChange={e => setFont(e.target.value)} style={{display: "block", margin: "15px 0px"}}>
                    <option value={'10px'}>10px</option>
                    <option value={'20px'}>20px</option>
                    <option value={'30px'}>30px</option>
                    <option value={'40px'}>40px</option>
                    <option value={'50px'}>50px</option>
                </select>
                <select value={fonts} onChange={e => setFonts(e.target.value)} style={{display: "block", margin: "15px 0px"}}>
                    <option value={'Times New Roman'}>Times New Roman</option>
                    <option value={'Cambria'}>Cambria</option>
                    <option value={'Verdana'}>Verdana</option>
                    <option value={'Helvetica'}>Helvetica</option>
                    <option value={'Futura'}>Futura</option>
                </select>
                <input type={'text'} onChange={inputText} value={text}></input>
            </fieldset>
        <div style={{marginTop: '15px', color:color, fontSize:font, fontFamily: fonts}}>{text}</div>
        </>
    )
}

export default Selektas;