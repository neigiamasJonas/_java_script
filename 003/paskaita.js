

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