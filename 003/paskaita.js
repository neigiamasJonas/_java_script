

//  1)  FOR naudojam tik tada, kai zinom kiek kartu cikla turim prasukti.

//  2)  While naudojamas kai ciklu kieki reikia atlikti nuo 0 iki begalybes.

//  3)  Do While naudojamas tada kai ciklu kieki reikia atlikti nuo 1 iki begalybes.

//  4)  for.Each nera ciklas. Jis iteruoja atitinkamus objektus.

//  5)  ciklai nutraukiami su break;

//  6)  continue nutraukia tik viena iteracija (viena ciklo prasukima).



let a = 0;
let b = 0

while(b < 10){

    if(++a > 10) {
        console.log('Avarija');     // saugiklis
        break;    
    }

    b++
}

// console.log(b);

console.log('----------------------');

let c = 0;

do {
    if(++a > 100) {
        console.log('Avarija');
        break;    
    }

    c++;

} while(c < 10);

console.log(b, c);


console.log('----------------------');

for(let i = 0; i < 10; i++) {

    if (i === 8) {
        break;
        // cikla nuptraukia ties 8
    }

    if (i === 6 || i === 3){
        continue;
        // 4 ir 7 rato nerodo
    }
    
    console.log(`Dabar sukasi       
    ${i + 1} ratas`);
    //// su backtick galiu padalinti viena eilute i kelias!!!!
}

console.log('----------------------');

////    CIKLAS CIKLE   ////


for (let i = 0; i < 5; i++) {
    console.log(`Dabar sukasi didelis ${i + 1} ratas`);

    for (let i2 = 0; i2 < 3; i2++) {
        console.log(`Dabar sukasi mazas ${i2 + 1} ratas`);
    
    }

}

console.log('----------------------');

//// UZDAVINYS: Leksteje gali buti nuo 10 iki 30 kasniu kotleto.
////            1) Kasnis susikrampo per rand 1....10.
////            2) Kasnis susikrampo neaisku kaip, tikrinti po kiekvieno kasnio do{while}


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++){

    // const gabaliukasSukramtomas = rand(1, 10);
    // kotletasSuvalgytasPer += gabaliukasSukramtomas;

    do{
        kotletasSuvalgytasPer++;
    } while (rand(0, 4));           // 0 - 20% kad iskris // 4 - 80% kad iskris kitas nei 0
}

console.log(kotletasSuvalgytasPer);