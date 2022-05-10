'use strict';

const namas = [];
const namas2= [];

let k = 'kate';
let b = 'barsukas';
let a = 'asilas';
let p = 'petras';

namas.push(k, b, a, p);

console.log(namas);
console.table(namas);

console.log(namas[2]);

namas[1] = 'kazys';
console.table(namas);

// namas[8] = 'Suo Sarikas';
// console.table(namas);
// console.log(namas);

let suo = 'Sarikas';

namas.push(suo)
namas.push('batuotas katinas')
console.log(namas);

// noret idet i pradzia masyvo [0] !! UNSHIFT !!
namas.unshift('pele');
console.log(namas);

console.log(namas.length);

console.log('------------------');
// norint isimti paskutini elementa naudojam POP

namas.pop();
console.log(namas);

console.log('------------------');
// norint isimti pirma elementa naudojam SHIFT

namas.shift();
console.log(namas);
console.table(namas);

console.log('------------------');
// norint isimti viduryje esanti elementa naudojam SPLICE

namas.splice(2, 1)      // ismetu asila
console.log(namas);
console.table(namas);

namas.splice(2, 2)      // antras skaicius rodo kiek nuo antro ismetu i virsu
console.log(namas);     // ismetu petra ir sarika
console.table(namas);

console.log('---------------------------');

namas2.push(k, b, a, p);
namas2.push('butiokas');
console.log(namas2);
console.table(namas2);

for (let i = 0; i < namas2.length; i++){
    console.log(namas2[i]);                 // parodo masyvo gyventojus
}

console.log('---------for in------------');

for (let i in namas2) {
    console.log(namas2[i]);
    console.log([i]);
}

console.log('----------for of---------');

for (let i of namas2) {
    console.log(i);
}

console.log('---------masyvai masyve--------');

const namasPlus = [
    [4, 7, 12],
    [85, 17, 12],
    [10, 33, 74, 23],
    [26, 41, 99, 21, 45],
]

console.table(namasPlus);

console.log(namasPlus[1][0]);       // ieskau 85
console.log(namasPlus[3][2]);       // ieskau 99


console.log('-----masyvo masyve gyventojai-----');

for (let i = 0; i < namasPlus.length; i++) {
    
    for (let i2 = 0; i2 < namasPlus[i].length; i2++) {
        console.log(namasPlus[i][i2]);
    
    }
}

console.log('---------for in------------');

for (let i in namasPlus) {
    console.log(namasPlus[i]);
    for (let k in namasPlus[i]) {
        console.log(namasPlus[i][k]);
    }
}

console.log('----------for of---------');

for (let i of namasPlus) {
    console.log(i);
    for (let k of i) {
        console.log(k);
    }
}

console.log('----------for each---------');

namasPlus.forEach(i => {
    i.forEach(k => {
        console.log(k);
    })
})

console.log('----------map---------');

// map naudojamas nebent tada, kai reikia turimo masyvo kopijos

namasPlus.map(i => {
    i.map(k => {
        console.log(k);
    })
})

console.log('---------------------------');
console.log('---------------------------');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}


// norint sukurt nauja masyva naudot paprasta FOR
const naujasNamas = [];

for (let i = 0; i < 100; i++) {
    naujasNamas.push(rand(10, 99));

}
console.log(naujasNamas);
// console.table(naujasNamas);

const naujasNamas2 = [];


// norint sukurt nauja masyva su masyvais viduje
for (let i = 0; i < 10; i++) {
    const aukstas = [];
    for (let k = 0; k < 10; k++){
        aukstas.push(rand(10, 99));
    }
    naujasNamas2.push(aukstas);

}
// console.log(naujasNamas2);
console.table(naujasNamas2);
