console.log('   1)');
// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

let nr1 = rand(0, 4);
let nr2 = rand(0, 4);

console.log(nr1);
console.log(nr2);

function dalyba(nr1, nr2) {
    if (nr1 === 0 || nr2 === 0) {
        return 'Kazkuris is sugeneruotu skaiciu yra nulis';
    }
    if (nr1 === nr2) {
        return 'Sugeneruoti skaiciai yra lygus';
    }
    if (nr1 > nr2) {
        return nr1 / nr2;
    } else {
        return nr2 / nr1;
    }
}

console.log(dalyba(nr1, nr2));

console.log('-----------------------');

console.log('   2)');
// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.

let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

console.log(a);
console.log(b);
console.log(c);

function vidurinisSkaicius(a, b, c ) {
    if ((a === b) || (a === c) || (b === c)) {
        return 'Maziausiai du is triju kintamuju yra vienodi';
    } else if ((a < b && b < c) || (c < b && b < a)) {
        return b;
    } else if ((b < a && a < c) || (c < a && a < b)) {
        return a;
    } else if ((a < c && c < b) || (b < c && c < a)) {
        return c;
    }

}
console.log(vidurinisSkaicius(a, b, c));

console.log('-----------------------');

console.log('   3)');

// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (rand() nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį

let d = rand(1, 10);
let e = rand(1, 10);
let f = rand(1, 10);

console.log(d);
console.log(e);
console.log(f);

function trikampis(d, e, f){
    if (d + e <= f || d + f <= e || e + f <= d) {
        return 'Trikampis nesigauna';
    } else {
        return 'Trikampis gaunasi';
    }
}

console.log(trikampis(d, e, f));

console.log('-----------------------');

console.log('   4)');

// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

let k1 = rand(0, 2);
let k2 = rand(0, 2);
let k3 = rand(0, 2);
let k4 = rand(0, 2);

console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);

const arr = [];
arr.push(k1, k2, k3, k4);
console.log(arr);

function pasikartoja(array, value) {
    return array.reduce((times, element) => {
        return (value === element ? times + 1 : times)}, 0)
};

console.log('Nulis pasikartoja', pasikartoja(arr, 0), 'kartus');
console.log('Vienetas pasikartoja', pasikartoja(arr, 1), 'kartus');
console.log('Dvejetas pasikartoja', pasikartoja(arr, 2), 'kartus');

console.log('-----------------------');

console.log('   5)');

// Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius.


// let random = Math.floor(Math.random() * (max - min + 1)) + min;


for (i = 0; i < 3; i++) {
    let skaiciai = rand(-10, 10);
    console.log(skaiciai);

    function atsakymas(skaiciai) {
        if (skaiciai < 0) {
            return `+${skaiciai}+`;
        } else if (skaiciai > 0) {
            return `-${skaiciai}-`;
        } else if (skaiciai === 0) {
            return `*${skaiciai}*`;
        }
    }
    console.log(atsakymas(skaiciai));
}


console.log('-----------------------');

console.log('   6)');

// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

 // kaina eu
;
const zvake = rand(5, 3000);
    console.log(zvake)

function nuolaida(zvake) {
    
    const nuolaida3 = Math.round(zvake / 100 * 3);
    const nuolaida4 = Math.round(zvake / 100 * 4);

    if (zvake > 1000 && zvake < 2000) {
        return `Perkant ${zvake} taikoma 3% nuolaida - ${nuolaida3}, o galutine suma - ${(zvake - nuolaida3)} euru`;
    } else if (zvake > 2000) {
        return `Perkant ${zvake} taikoma 4% nuolaida - ${nuolaida4}, o galutine suma - ${(zvake - nuolaida4)} euru`;
    } else {
        return `Perkant ${zvake} zvakes nuolaida netaikoma`;
    }
}
console.log(nuolaida(zvake));

console.log('-----------------------');

console.log('   7)');

// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

let v1 = rand(0, 100);
let v2 = rand(0, 100);
let v3 = rand(0, 100);

console.log(v1);
console.log(v2);
console.log(v3);

const arr5 = [];
arr5.push(v1, v2, v3);
console.log(arr5);

const vidurkis = arr5.reduce((a, b) => (a + b));
console.log('Triju random skaiciu vidurkis lygus', Math.round(vidurkis / arr5.length));


// .filter naudojas isfiltruoti skaicius array
const arr5Limituotas = arr5.filter(skaicius => skaicius >= 10 && skaicius <= 90);
console.log(arr5Limituotas);


const vidurkisLimituotas = arr5Limituotas.reduce((a, b) => (a + b));
console.log('Skaiciu tarp 10 ir 90 vidurkis lygus', Math.round(vidurkisLimituotas / arr5Limituotas.length));
