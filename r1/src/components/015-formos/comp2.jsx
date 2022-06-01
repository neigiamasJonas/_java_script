import { useState, useEffect } from "react";

function Katinai() {
    const [vardas, setVardas] = useState('');
    const [svoris, setSvoris] = useState('');

    const [array, setArray] = useState([]);

    // const istorija = useRef([]);


    const click = () => {
        const newArray = [...array];

        newArray.push({
            vardas: vardas,
            svoris: svoris
          });
        
          setArray(newArray);
          console.log(newArray);

    }

    // PIRMAS KROVIMAS
    useEffect(() => {
        setArray(JSON.parse(localStorage.getItem('array')));
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {

            localStorage.setItem('array', JSON.stringify(array));
            // istorija.current.unshift(array);
        }, [array]);


    return (
        <>
            <fieldset>
                <input style={{margin: '10px 0px'}} type="text" onChange={e => setVardas(e.target.value)} value={vardas}></input>
                <input style={{margin: '10px 0px'}} type="text" onChange={e => setSvoris(e.target.value)} value={svoris}></input>
                <button style={{margin: '20px 0px'}} onClick={click}>Prideti</button>
            </fieldset>
            <div>
                {
                    array.sort((a, b) => (b.svoris - a.svoris)).map((v, i) => <div key={i}>Katino vardas: <b>{v.vardas}</b> svoris: {v.svoris} kg</div>)
                }
            </div>

        </>
    )
}

export default Katinai;

