function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

console.log('---------------------------');

const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];

// const copy = n1.map((v) => true);
const copy = n1.map((v) => v);
const copy1 = n1.filter((v) => true);
const index = n1.indexOf('Asilas');

console.log(copy);
console.log(copy1);
console.log(index);


const copy2 = n1.filter(v => -1 != n2.indexOf(v));
console.log('Palygina du array ir randa kurie index sutampa', copy2);

const copy3 = [];

for (let i = 0; i < n1.length; i++) {
    const what = n1[i];

    for (let k = 0; k < n2.length; k++) {

        if (n2[k] == what) {
            copy3.push(what);
            break;  // gali but arba ne
        }
    }
}

console.log('Irgi palygina, bet su FOR', copy3);

for (ja in n1){
    console.log(ja);
}

for (ja of n1){
    console.log(ja);
}

console.log('--------------------------');
console.log('----------- 10 ------------');

const ma = [rand(1, 3), rand(1, 3)];

for (let i = 2; i < 10; i++){
    ma.push(ma[i - 1] + ma[i - 2]);
}

console.log(ma);

console.log('--------------------------');

const kazkas = 'asdd'

const namasSuKaminu = {             // objektas
    kaminas: 'yra trys metrai',
    gyventojai: ['Petras', 'Asilas', 'Barsukas', 'Kate'],
    tas: kazkas
};

namasSuKaminu.tas = 888         // overwritintas

console.log(namasSuKaminu.gyventojai, namasSuKaminu.tas);

namasSuKaminu.animals = {cat: "Murka", dog: "Brisius"};

console.log(namasSuKaminu);
console.log(namasSuKaminu.animals.cat);

const namasSuKaminu2 = namasSuKaminu;   // naujo objekto nesukuria, dabar tam paciam naudojami du pavadinimai
                                        // keiciant viena, keiciasi ir kitas

console.log('--------------------------');

const n4 = n1.slice();                  // kopjavimas

n4.shift();

console.log(n4);
console.log(n1);

console.log('--------------------------');

const a1 = {cat: "Murka", dog: "Brisius"};
const a2 = {...a1};

console.log(a2);

console.log('--------------------------');

const namasSuKaminu3 = JSON.parse(JSON.stringify(namasSuKaminu));   // objekto kopijavimas
namasSuKaminu3.animals.cat = 'kitas katinas'

console.log(namasSuKaminu);
console.log(namasSuKaminu3);

console.log('------------ MAP --------------');

const map = new Map();
console.log(map.size);

map.set('murka', 5);
map.set('rikis', 8);
map.set('pukis', 4);

map.delete('murka');

console.log(map);
console.log(map.get('rikis'));
console.log(map.has('pukis'));

const masmap = [...map];            // map pavertimas i masyva
console.log(masmap);

console.log('------------- SETAS --------------');

const se = new Set();
console.log(se.size);

se.add('cat');
se.add('dog');
se.add('cat');
se.add({t:'cat'});          // kopiju nededa, bet jei idedant objekta nereguoja

se.delete('dog');

console.log(se.has({t:'cat'}))

console.log(se.size);
console.log(se);


const va = [4, 8, 2, 7, 7, 4]

console.log(new Set(va));