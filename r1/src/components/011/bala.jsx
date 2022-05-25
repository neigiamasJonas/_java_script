// {/* 1 uzdavinys */}

function Bala() {
    const seaPlaners = [
        {id: 1, type: 'man', name: 'Lina', color: 'blue'},
        {id: 2, type: 'car', name: 'Opel', color: 'red'},
        {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
        {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
        {id: 5, type: 'man', name: 'Tomas', color: 'green'},
        {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
        {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
        {id: 8, type: 'car', name: 'MB', color: 'blue'},
        {id: 9, type: 'car', name: 'ZIL', color: 'red'},
        {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
      ];

      return (
          <>
          <div>
              <ul>
                  {
                      seaPlaners.map((v, i) => {
                          return (
                              <li key={i} style={{marginTop: "40px"}}>ID: {i+1}
                                  <h3>Type: {v.type}</h3>
                                    <div style={{color: v.color}}>Name: {v.name}</div>
                                    <div>Color: {v.color}</div>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>
          </>
      )
}

export default Bala;