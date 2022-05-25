import Laivas from "./3laivas";
import Valtis from "./3valtis";
import Sala from "./3sala";

function Jura({treciasUzdavinys}) {
    return (
        <>
             <br />
             <div>Type: man</div>
            {
                treciasUzdavinys.map(s => s.type === 'man' ? <Valtis key={s.id} man={s}></Valtis> : null)
            }
            <br />
            <div>Type: car</div>
            {
                treciasUzdavinys.map(s => s.type === 'car' ? <Laivas key={s.id} car={s}></Laivas> : null)
            }
            <br />
            <div>Type: animal</div>
            {
                treciasUzdavinys.map(s => s.type === 'animal' ? <Sala key={s.id} animal={s}></Sala> : null)
            }
            <br />
            <div>Type: fish</div>
            {
                treciasUzdavinys.map(s => s.id === 4 ? <div key={s.id}><i>ID: {s.id} <b style={{color: s.color}}>{s.name}   </b>Spalva - {s.color}</i></div> : null)
            }
        </>
    )
}

export default Jura;