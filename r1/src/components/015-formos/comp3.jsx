// 3. Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.


import { useState } from "react";


function Santykis() {

    const [number1, setNumber1] = useState(100)
   
    const [number2, setNumber2] = useState(50);

    const nr1 = e => {
        const skaicius1 = e.target.value;
        setNumber1(skaicius1);
        setNumber2(skaicius1 / 2);
    }

    const nr2 = e => {
        const skaicius2 = e.target.value;
        setNumber2(skaicius2);
        setNumber1(skaicius2 * 2);
    }




    return(
        <>
        <div style={{display: 'inline-block'}}>Santykis tarp skaiciu</div>
            
        <input type="number" style={{margin: '20px 0px'}} onChange={nr1} value={number1}></input>
        <input type="number" onChange={nr2} value={number2}></input>
    
        </>
    )
}

export default Santykis;