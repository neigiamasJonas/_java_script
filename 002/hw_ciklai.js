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
