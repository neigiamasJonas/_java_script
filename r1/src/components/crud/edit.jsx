import { useEffect, useState } from "react";

function Edit({ modalData, setModalData, setEditData }) {

    const [name, setName] = useState('');
    const [type, setType] = useState('1');
    const [place, setPlace] = useState('');

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setName(modalData.name);
        setType(modalData.type);
        setPlace(modalData.place);
    }, [modalData]);

    const handleEdit = () => {
        const data = {name, type, place, id: modalData.id};
        setEditData(data);
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ex Changer</h5>
                        <button type="button" className="close" onClick={() => setModalData(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                            <small className="form-text text-muted">Enter Ex name here.</small>
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <select className="form-control" onChange={e => setType(e.target.value)} value={type}>
                                <option value="1">Test</option>
                                <option value="2">Written</option>
                                <option value="3">Spoken</option>
                            </select>
                            <small className="form-text text-muted">Select Ex type here.</small>
                        </div>
                        <div className="form-group">
                            <label>Place</label>
                            <input type="text" className="form-control" onChange={e => setPlace(e.target.value)} value={place} />
                            <small className="form-text text-muted">Enter Ex place here.</small>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setModalData(null)}>Close</button>
                        <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;