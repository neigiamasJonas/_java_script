function Hello({spalva, bg}) {
    return <h2 style={
        {
            color: spalva,
            backgroundColor: bg
        }
    }>Hello</h2>
}

export default Hello

// Hello ({}) naudojant be zodzio props. !!! PROPS - {FUNKCIJOS KINTAMIEJI}
// Hello (props) { color.spalva }