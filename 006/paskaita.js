

const b = 'babajaga';
const c = 'Stepas Babrauskis'

function fun(ki, li) {           // deklaracija. jos nevygdo (galima keisti kintama is b -> bet ka)
    console.log(ki);
    console.log(li);
}

fun(b);                     // kvieciama funkcija. tik tada vygdo deklaracija
fun('bebras');              // kviecia funkcija naudojant fun(...) reiksme.
fun(c);

fun(b, c);
fun('Gintaras', 'Krapikas');

function funk(ki, li) {
    const suma = ki + li;
    const daugyba = ki * li;
    // return suma;
    return [suma, daugyba];         // galima tik viena atsakyma grazint
}                                   // galima naudot masyva returne

funk(2, 5)
                                    // return neuztenka
const sumama = funk(2, 5);          // reikia prisiskirti const
console.log(sumama);

const daugybaba = funk(2, 5);
console.log(daugybaba);


console.log('-----------------');


const [gavau1, gavau2] = funk(2, 5);    // norint grazinti atskirus atsakymus
console.log(gavau1, gavau2);            // gavau1 ir gavau2 gali neatitikti funkcijos return reiksmiu


console.log('-------- ANONIMINE FUNKCIJA---------');
////////////////////////////////////////////////////

const beVardo = function() {            // bevardes funkcijos naudojamas, kad ju neperdeklaruotu, nes const!!!!
    console.log('as neturiu vardo');
}

beVardo()           // taip kvieciamos funkcijos --> funkpav()


console.log('-------- Vardine FUNKCIJA---------')
////////////////////////////////////////////////////

function suVardu() {
    console.log('As turiu varda');
}
suVardu()


console.log('-------- ARROW FUNKCIJA---------');
////////////////////////////////////////////////////

const strele = () => {console.log('As striline funkcija');}     // jeigu dvi eilutes - reikia RETURN
strele()


// jeigu mes turime VIENA parametra, mes galime praleisti skliaustelius (). 
const vienas = v => console.log('vienas parametras');   // Galima praleisti lauztinius skliaustus, jei viskas telpa i viena eilute
vienas();

const du = v => 'vienas parametras DU';
console.log(du());


console.log('-------- FUNKCIJA FUNKCIJOJ---------');
////////////////////////////////////////////////////

const fancy = () => {
    return kita = () => {
        console.log('labas');
    }
}

console.log(fancy());
fancy()();

const fancy2 = () => () => console.log('Viso Gero');
fancy2()();

const ja = fancy();
ja();

console.log('--------- CALL BACK --------------');

// function alio(element) {         // senovinis budas
//     console.log(element);
// }

const array1 = ['a', 'b', 'c']

// array1.forEach(alio);            // senovinis budas

array1.forEach((element, i) => console.log(element, i));

console.log('------------');

const dv = [
    [2, 3, 0, 8, 0],
    [7, 3, 8, 5, 6],
    [5, 3, 9, 8, 0],
    [2, 7, 4, 8, 9],
];

dv.forEach(r => r.forEach(n => console.log(n)));


const cat = {
    name: 'Pilkis',
    voice: function() {console.log('Meow')},
}

console.log(cat.name);          // shioj situacijoj voice funkcija yra OBJEKTO METODAS
cat.voice();                    // savybes, kurios yra funkcijos yra METODAI 


console.log('------- THIS --------');

const dog = {
    name: 'Plikis',
    voice: function() {console.log('Woooff says ' + this.name)},
}

dog.voice()


console.log('----------- SORT -----------');


const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate', 'aaa'];
const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];

n1.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
})
console.log(n1);