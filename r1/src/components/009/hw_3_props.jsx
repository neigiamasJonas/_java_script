function Number({skaicius}) {
let spalva;

if (skaicius === 1){
    spalva = 'blue';
}   else if (skaicius === 2){
    spalva = "red";
}   else {
    spalva = "black";
}

    return <h1 style={
        {
            // color: skaicius === 1 ? "blue" : skaicius = 2 ? "red" : 'black'
            color: spalva
        }
    }>Zebrai ir Bebrai</h1>
}

export default Number;