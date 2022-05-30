import { useState } from 'react';

function Comp1 () {

    const [nr, setNr] = useState('')
    console.log(nr);

    const [array, setArray] = useState([]);

    const click = () => {
        
        const copyArray = [...array];
        for(let i = 0; i < nr; i++){
            copyArray.push('')
        }
        setArray(copyArray);

    }

    return (
        <>
        <fieldset>
            <input type="text" onChange={e => setNr(e.target.value)} value={nr}></input>
            <button style={{margin: '20px 0px'}} onClick={click}>Pridek kv</button>
        </fieldset>
            <div>
                {
                        array.map((a, i) => <div className="kv" key={i}>{a}</div>)
                    
                }
            </div>
        </>
    )
}

export default Comp1;

// 