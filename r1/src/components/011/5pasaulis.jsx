import Akvariumas from "./5akvariumas"
import Garazas from "./5garazas"
import Namas from "./5namas"
import Narvas from "./5narvas"

function Pasaulis({penktasUzdavinys}) {
    return (
        <>
        <div style={{margin: '40px 0px'}}>Penktas Uzdavinys</div>
        <div style={{marginBottom: '20px'}}>Nelyginiai</div>
        {
            penktasUzdavinys.map(s => ((s.type === 'man') && (s.id % 2 !== 0)) ? <Namas key={s.id} man={s}></Namas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'car') && (s.id % 2 !== 0)) ? <Garazas key={s.id} car={s}></Garazas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'animal') && (s.id % 2 !== 0)) ? <Narvas key={s.id} animal={s}></Narvas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'fish') && (s.id % 2 !== 0)) ? <Akvariumas key={s.id} fish={s}></Akvariumas> : null)
        }
        <br />
        <div style={{marginBottom: '20px'}}>Lyginiai</div>
        {
            penktasUzdavinys.map(s => ((s.type === 'man') && (s.id % 2 === 0)) ? <Namas key={s.id} man={s}></Namas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'car') && (s.id % 2 === 0)) ? <Garazas key={s.id} car={s}></Garazas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'animal') && (s.id % 2 === 0)) ? <Narvas key={s.id} animal={s}></Narvas> : null)
        }
        {
            penktasUzdavinys.map(s => ((s.type === 'fish') && (s.id % 2 === 0)) ? <Akvariumas key={s.id} fish={s}></Akvariumas> : null)
        }
        </>
    )
}

export default Pasaulis