import { useContext } from "react";
import Duomenys from "../../Contexts/Duomenys";

function Bebras() {

    const {counter1, counter2} = useContext(Duomenys)

    return(
        <div>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
        </div>
        // <Duomenys.Consumer>      // nenaudot shito
        //     {
        //         data => <h1>{data.counter1}</h1>
        //     }
        // </Duomenys.Consumer>
    )
}

export default Bebras;