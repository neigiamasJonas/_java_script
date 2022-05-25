function Spalva({spalva}) {
    return <div><i>ID: {spalva.id}   <b style={{color: spalva.color}}>{spalva.color}</b>  {spalva.type} {spalva.name}</i></div>
}

export default Spalva;