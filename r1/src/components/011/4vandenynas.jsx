import Spalva from "./4spalva";
import Tipas from "./4tipas";
import Vardas from "./4vardas";

function Vandenynas({ketvirtasUzdavinys1, ketvirtasUzdavinys2, ketvirtasUzdavinys3}) {

    return (
        <>

        {
           ketvirtasUzdavinys1.map(s => <Tipas key={s.id} tipas={s}></Tipas>)
        }
        {/* <br />
        {
           ketvirtasUzdavinys2.map(s => <Vardas key={s.name} vardas={s}></Vardas>)
        }
        <br />
        {
            ketvirtasUzdavinys3.map(s => <Spalva key={s.id} spalva={s}></Spalva>)
        }
        <br /> */}
        </>
    )
}

export default Vandenynas;