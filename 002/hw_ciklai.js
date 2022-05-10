console.log('-----------------------');
console.log('   1)');
// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}

console.log('-----------------------');
console.log('   2)');
// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
    let skaicius = i;
    console.log(skaicius);
}

console.log('-----------------------');
console.log('   3)');
// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
    let skaicius = i * 10;
    console.log(skaicius);
}

console.log('-----------------------');
console.log('   4)');
// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for (let i = 49; i < 54; i++) {
    let skaicius = i;
    console.log(skaicius);
}

console.log('-----------------------');
console.log('   5)');
// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (let i = 4; i >= 0; i--) {
    let skaicius = i;
    console.log(skaicius);
}

console.log('-----------------------');
console.log('   6)');
// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for (let i = 0; i <= 4; i++) {
    let skaicius = i * 2;
    console.log(skaicius);
}

console.log('-----------------------');
console.log('   7)');
// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
    let skaiciai = 0;
    skaiciai = Math.floor(Math.random() * 10) + 1;
    console.log(skaiciai);
}

console.log('-----------------------');
console.log('   8)');
// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let skaiciai = 0;

while (skaiciai !== 5) {
    skaiciai = Math.floor(Math.random() * 10) + 1;
    console.log(skaiciai);
}

console.log('-----------------------');
console.log('   9)');
// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let skaiciai2 = 0;
let skaiciai2max = 100;

while (skaiciai2 <= skaiciai2max) {
    skaiciai = Math.floor(Math.random() * 10) + 1;
    console.log(skaiciai);
    skaiciai2 += skaiciai
    
    console.log(skaiciai2);
}

console.log('-----------------------');
console.log('   10)');
// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let skaiciai3 = 0;
let kartai = 0;

while (skaiciai3 !== 5 && skaiciai3 !== 7) {
    skaiciai3 = Math.floor(Math.random() * 10) + 1;
    kartai++
    console.log(skaiciai3);
}
console.log(`Skaiciai prasisuko ${kartai} kartus`);

console.log('-----------------------');
console.log('   11)');
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

let skaiciai5 = 0;
let suma2 = 20;

 while (skaiciai5 <= suma2) {
    for (let i = 1; i <= 11; i++) {
        let skaiciai = Math.floor(Math.random() * 10) + 1;
        // console.log(skaiciai);
        skaiciai5 += skaiciai;
        
    
        console.log(`Random Skaicius ${skaiciai}, Suma ${skaiciai5}, Ciklas ${i}`);
    }
}

console.log('-----------------------');
console.log('   12)');
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let skaiciai6 = 0;
let count = 0;

while (count < 3) {
    skaiciai6 = Math.floor(Math.random() * 10) + 1;
    
    if (skaiciai6 % 2 !== 0) {
        
        {count++};
        // console.log(count);
    }
    console.log(skaiciai6);    
}

console.log('-----------------------');
console.log('   13)');

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let skaiciusA = 0;
let skaiciusB = 0;

do {
    skaiciusA = rand(0, 10);
    skaiciusB = rand(0, 10);

    console.log(skaiciusA, skaiciusB);
} while (skaiciusA !== skaiciusB);


console.log('-----------------------');
console.log('   14)');

// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

let skaiciusC = 0;
let skaiciusD = 0

do{
    // if (++skaiciusC > 140 || ++skaiciusD > 140){
    //     console.log('Avarija');
    //     break;
    // }

    skaiciusC += rand(0, 10);
    skaiciusD += rand(0, 10);

    console.log(skaiciusC, skaiciusD);
} while (skaiciusC <= 100 || skaiciusD <= 100);
console.log('Abi sumos daugiau uz 100:', skaiciusC, skaiciusD);

console.log('-----------------------');

let a8 = 0;
let b8 = 0;

while (a8 <= 100 || b8 <= 100) {
    a8 += rand(0, 10);
    b8 += rand(0, 10);

    console.log(a8, b8);
}
console.log('abi sumos2 daugiau uz 100:', a8, b8);


console.log('-----------------------');
console.log('   14)');

// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).


let a9 = 0;
let b9 = 0;
let count9a = 0;
let count9b = 0;

while (count9a < 3 || count9b < 3) {

    a9 = rand(0, 10);
    b9 = rand(0, 10);

    if (a9 % 2 !== 0) {
        count9a++;
    }
    if (b9 % 2 !== 0) {
        count9b++;
    }
    console.log(a9, b9);

}