
function Sala({animal}) {
    return <div><i>ID: {animal.id} <b style={{color: animal.color}}>{animal.name}   </b>Spalva - {animal.color}</i></div>
}

export default Sala;