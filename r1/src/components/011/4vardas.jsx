function Vardas({vardas}) {
    return <div><i>ID: {vardas.id}   <b style={{color: vardas.color}}>{vardas.name}</b> {vardas.type}</i></div>
}

export default Vardas;