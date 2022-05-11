function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

console.log('---------- UZDAVINYS --------');
// 1 ) Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
// 2 )Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

const pinigine = [];
const random = rand(10, 30);
let piniguSuma = 0;
let piniguSuma2 = 0;
let gryniPinigai = 0;

console.log('---------- 1) 2) ------------');

for (let i = 0; i < random; i++) {                          // 1)
    pinigine.push(rand(0, 10));

}

for (let j = 0; j < pinigine.length; j++) {                 // 2)
    piniguSuma += pinigine[j];
    // console.log(pinigine[j]);
}

console.table(pinigine);
console.log('Pinigu suma:', piniguSuma);



// const piniguSum = pinigine.reduce((a, b) => (a + b));    // 2)
// console.log(piniguSuma);

console.log('---------- 3) 4) ------------');

const pinigineKeiciant0 = [...pinigine];

for (let k = 0; k < pinigineKeiciant0.length; k++) {                 // 3)

    if (pinigineKeiciant0[k] > 2) {
        gryniPinigai += pinigineKeiciant0[k];
        
    } else if (pinigineKeiciant0[k] <= 2) {                          // 4)
        pinigineKeiciant0[k] = 0;
    }
}

console.table(pinigine);
console.log('Grynu pinigu suma :', gryniPinigai);


console.log('---------- 5) ------------');
// Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;


const didziausia = Math.max(...pinigine);
let didziausiaKiek = 0;

for (let k = 0; k < pinigine.length; k++){
    if (pinigine[k] == didziausia) {                        
        didziausiaKiek++;
    }

}

console.log('Didziausia reiksme:', didziausia);
console.log('Didziausia reiksme kartojasi:', didziausiaKiek);


console.log('---------- 6) ------------');
// Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

const pinigineKeiciantK = [...pinigine]

for (let k = 0; k < pinigineKeiciantK.length; k++){
    
    if (pinigineKeiciantK[k] === 0) {
        pinigineKeiciantK[k] = (k);    
    }
}
console.table(pinigineKeiciantK);


console.log('---------- 7) ------------');
// Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

const pinigine30 = [...pinigine];
console.table(pinigine30)

while (pinigine30.length < 30) {
    pinigine30.push(rand(0, 10));
    
}
console.table(pinigine30);


console.log('---------- 8) ------------');
// Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

const pinigineMonetos = [];
const pinigineGryni = [];

for (let k = 0; k < pinigine.length; k++) {

    if (pinigine[k] <= 2) {
        pinigineMonetos.push(pinigine[k]);
    } else if (pinigine[k] > 2) {
        pinigineGryni.push(pinigine[k]);
    }
}

console.table(pinigineMonetos);
console.table(pinigineGryni);


console.log('---------- 9) ------------');
// Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

const pinigineSuSkyreliais = [];

pinigineSuSkyreliais.push(pinigineMonetos);
pinigineSuSkyreliais.push(pinigineGryni);

console.log(pinigineSuSkyreliais);


console.log('---------- 10) 11) ------------');
// Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

const treciasMasyvas = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

pinigineSuSkyreliais.push(treciasMasyvas);
treciasMasyvas.sort();

console.log(pinigineSuSkyreliais);


console.log('---------- 12) 13) ------------');
// Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

let masterCount = 0;
let visaCount = 0;

while (treciasMasyvas.length < 20) {

    const master = (rand(0, 1));



    if (master === 0) {
        masterCount++;
        treciasMasyvas.push('Master Card');
    } else if (master === 1) {
        visaCount++;
        treciasMasyvas.push('Visa');
    }

}

console.log(pinigineSuSkyreliais);

// 13) kuriu korteliu daugiau

if (masterCount > visaCount) {
    console.log('Master Card yra daugiau nei Visa korteliu');
} else if (masterCount < visaCount) {
    console.log('Visa yra daugiau nei Master Card korteliu');
} else {
    console.log('Korteliu yra po lygiai');
}


console.log('---------- 14) ------------');
// Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

const loterijaMasyvas = [];

for (let i = 0; i < 10; i++) {
    loterijaMasyvas.push(rand(1000000000, 9999999999));
}

pinigineSuSkyreliais.push(loterijaMasyvas)
console.log(pinigineSuSkyreliais);


console.log('---------- 15) ------------');
// bilietu skaiciu isrusiuoti nuo maziausio iki didziausio

loterijaMasyvas.sort(function(a, b){return a-b});

console.log(pinigineSuSkyreliais);


console.log('---------- 16) ------------');
// Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

let gryniRand = 0;
let gryniRandSuma = 0;


while (gryniRandSuma < 500) {
    gryniRand  = rand(3, 10)
    gryniRandSuma += gryniRand;
    pinigineGryni.push(gryniRand);
}

console.log(pinigineSuSkyreliais);
console.log('Naujai idetu grynu suma:', gryniRandSuma);


console.log('---------- 17) ------------');
// Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.





console.log('---------- 18) ------------');
//  Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

