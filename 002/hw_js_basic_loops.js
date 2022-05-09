console.log('-----------------------');
console.log('   1)');

const a1 = 5;
const a2 = 13;
const a3 = 21;

const suma1 = a1 + a2 + a3;
console.log(suma1);

const stringas1 = '' + a1 + a2 + a3;
console.log(stringas1);

console.log(`${a1} ${a2} ${a3} skaiciu suma lygi ${suma1}`);


console.log('-----------------------');
console.log('   2)');

function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const k1 = rand(5, 10);
console.log(k1);


console.log('-----------------------');
console.log('   3)');

const s1 = 'Labas';

for (let i = 0; i < 5; i++) {
    console.log(s1);
}


console.log('-----------------------');
console.log('   4)');

for (let i = 0; i < 7; i++) {
    console.log(k1);
}


console.log('-----------------------');
console.log('   5)');


for (let i = 0; i < k1; i++) {
    console.log(k1);
}


console.log('-----------------------');
console.log('   6)');

for (let i = 0; i < k1; i++) {
    if (k1 > 7){
        console.log(k1);
    } else {
        console.log(`skaicius mazesnis nei 7 arba lygus`);
    }
}


console.log('-----------------------');
console.log('   7)');

let k3 = 0;
let k3Suma = 0;
let count3 = 0;
let k3String = '';

while (count3 < 5) {
    k3 = rand(10, 20);                  // a)
    count3++
    console.log(k3);

    k3Suma = k3Suma + k3;               // b)
    // console.log(k3Suma);

    k3String += ' ' + k3;               // c)

}
console.log('k3 skaiciu suma lygi:', k3Suma);
console.log(k3String);

const d = k3String + (' ' + k3Suma);    // d)
console.log(d);


console.log('-----------------------');
console.log('   8)');

let k4 = 0;
let k4Suma = 0;
let count4 = 0;
let k4Atmesta = 0;
let k4Lyginis = 0;
let k4Nelyginis = 0; 


while ((k4 !== 10) && (k4 !== 11)){
    k4 = rand(10, 25);              // a)

    count4++                        // b)
    
    console.log(k4);
    console.log(count4);

    if (k4 % 2 !== 0) {             // e)
        k4Nelyginis++;
    } else if (k4 % 2 === 0) {
        k4Lyginis++;
    }


    if (k4 > 18) {                  // c)
        k4Atmesta++;                // d)                         
        continue;   // prasichekint shita!!!!!!!!!!!!!!!!!!
    } else {
        k4Suma += k4;
    }

}

console.log('k4 skaiciu suma lygi:', k4Suma);
console.log('k4 atmestu skaicius skaicius yra:', k4Atmesta);

console.log('k4 sugeneruotu nelyginiu skaiciu yra:', k4Nelyginis);
console.log('k4 sugeneruotu lyginiu skaiciu yra:', k4Lyginis);

// F nepadariau!!!!!


console.log('-----------------------');
console.log('   9)');

let k5 = 0;
let countk5 = 0;
let countk5b = 0;
let i = 0;



while (k5 !== 5) {
    k5 = rand(5, 10);
    countk5++
   for (i = 0; i < k5; i++ ) {
       countk5b += i;
       
    //    console.log(countk5b);
    //    console.log('------------------');
   }

    console.log(k5);
}

console.log('Pirmo while iteraciju kiekis', countk5);
console.log('Antro for iteraciju kiekis', countk5b);