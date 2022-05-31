import './App.scss';
import './bootstrap.css';
import './crud.scss';
import Create from './components/crud/create';
import { useState, useEffect } from 'react';
import { create, read, remove } from './Functions/localStorage';
import List from './components/crud/list';
import Edit from './components/crud/edit';



////////// CRUD - Creat Read Update Delete ////////


 function App() {

    // last update component (paskutinio localStorage update laikas), kad atsinaujintu ne po refresh
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    // modalData truksta isikopint
    const [modalData, setModalData] = useState(null);





    const [createData, setCreateData] = useState(null);     // net ir tuscias objektas turi tureti savo ID

    // 1 C-REATE
    useEffect(() => {

        if(createData === null) {
            return;
        }

        // to localStorage // tiesiai is cia i state neirashom // state nuskaito is localStorage

        create(createData);

        setLastUpdate(Date.now());      // last update

    }, [createData])





    // ex list state
    const [exes, setExes] = useState(null)

    // 2 R-EAD
    useEffect (() => {
        setExes(read());

    }, [lastUpdate]);                   // last update

    


    // 3 D-ELETE

    const [deleteData, setDeleteData] = useState(null);

    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        remove(deleteData);
        setLastUpdate(Date.now());

    }, [deleteData]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData}></Create>
                    </div>
                    <div className="col-8">
                        <List exes={exes} setDeleteData={setDeleteData} setModalData={setModalData}></List>
                    </div>
                </div>
            </div>
            <Edit modalData={modalData} setModalData={setModalData}></Edit>
        </>
    );


}
export default App;



// 1. is create issiuntem dupmenis i createData
// pasikeitus duomenims, isshaukia useEffect (datos) ir viskas irashoma i lokal storage

//  2. exes state nustatytas ant useEffect, kuris veikia tada, kai pas mus uzsiupdeitina puslapis (parafrechinus puslapi) (readina is read(funkcijos))
// jis nueina i lokal storage, paima duomenis, irasho i exes, jis pakeicia, perduoda list'ui ir listas ismapina i atskirus ex (ex.map)