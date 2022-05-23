// {/* 2 uzdavinys */}

import Daiktas from "./daiktas"

function Tvenkinys({seaPlaners}) {



    return (
        <>
            {
                seaPlaners.map(p => p.id % 2 ? <Daiktas key={p.id} seaPlaner={p}></Daiktas> : null)
            }
            <br />
            {
                seaPlaners.map(p => p.id % 2 ? null : <Daiktas key={p.id} seaPlaner={p}></Daiktas> )
            }
        </>
        )
}

export default Tvenkinys