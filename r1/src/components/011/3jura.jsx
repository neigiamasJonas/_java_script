import Laivas from "./3laivas";
import Valtis from "./3valtis";
import Sala from "./3sala";

function Jura({treciasUzdavinys}) {
    return (
        <>
             <br />
            {
                treciasUzdavinys.map(s => s.id === 1 ? <Valtis key={s.id} man={s}></Valtis> : null)
            }
            <br />
            {
                treciasUzdavinys.map(s => s.id === 2 ? <Laivas key={s.id} car={s}></Laivas> : null)
            }
            <br />
            {
                treciasUzdavinys.map(s => s.id === 3 ? <Sala key={s.id} animal={s}></Sala> : null)
            }
            <br />
            {
                treciasUzdavinys.map(s => s.id === 4 ? <div key={s.id}><i>ID: {s.id} <b>{s.name}   </b>Spalva - {s.color}</i></div> : null)
            }
        </>
    )
}

export default Jura;