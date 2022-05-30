import './App.scss';
import './bootstrap.css';
import Create from './components/crud/create';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';


////////// CRUD - Creat Read Update Delete ////////




 function App() {

    const [createData, setCreateData] = useState(null);     // net ir tuscias objektas turi tureti savo ID


    // C-reate
    useEffect(() => {

        if(createData === null) {
            return;
        }

        // to localStorage

    }, [createData])



    return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Create></Create>
                        </div>
                        <div className="col-8">
                            One of three columns
                        </div>
                    </div>
                </div>
            </>
    );
}

export default App;