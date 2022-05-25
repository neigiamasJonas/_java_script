import Spalva from "./4spalva";
import Tipas from "./4tipas";
import Vardas from "./4vardas";

function Vandenynas({ketvirtasUzdavinys}) {

    return (
        <>

        {
            // ketvirtasUzdavinys1.sort................ tada .map !!!!!!!!!!!!
           ketvirtasUzdavinys.sort((a, b) => (a.type > b.type) ? 1 : -1).map(s => <Tipas key={s.id} tipas={s}></Tipas>)
        }
        {
            ketvirtasUzdavinys.sort((a, b) => (a.name > b.name) ? 1 : -1).map(s => <Vardas key={s.id} vardas={s}></Vardas>)
        }
        {
            ketvirtasUzdavinys.sort((a, b) => (a.color > b.color) ? 1 : -1).map(s => <Spalva key={s.id} spalva={s}></Spalva>)
        }
        </>
    )
}

export default Vandenynas;