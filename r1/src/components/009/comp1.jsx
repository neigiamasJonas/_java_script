function Comp1() {
const xxx = 22;
    return (
        <>
            <h2 style={
                {
                    color: 'blue',
                    backgroundColor: 'red',
                    padding: "20px"
                }
            }>Comp1</h2>
            <span>Pirmasis componentas Nr. { xxx > 20 ? 'Daug' : 'Nedaug' } { 10 + 20 }</span>
        </>
    );
}

export default Comp1;


// jeigu yra daugiau nei viena eilute - apskliausti skliausteliais!!
// jeigu noriu grazinti daugiau nei viena taga reikia apskliausti tusciu teviniu tagu <> </>

// rasant style, naudojam dvejus {{}} sklaistelius

