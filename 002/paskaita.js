let skaicius = 444;
let skaicius2 = 0;
let netikrasSkaicius = '444';
let netikrasSkaicius2 = '0';
let tusciasStringas = '';
let loginis = false;


console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginis);

console.log('----------------------');

console.log(5 > 8);
console.log(!!skaicius);        // jei vienas sauktukas - reiksme padaro logine, tik priesinga
console.log(Boolean(skaicius)); // !! ir Boolean yra the fkn same
console.log(!!skaicius2);

console.log(!!netikrasSkaicius2);
console.log(!!tusciasStringas); // tik tuscias stringas bus FALSE


if (netikrasSkaicius) {         // jeigu netikrasSkaicius yra TRUE - spausdinam YES
    console.log('Yes');
}
else if (skaicius) {
    console.log('Nezinau')      // nespausdina nes pasirinko pirma IF
}

console.log('----------------------');

if (tusciasStringas) {          // jeigu tuscias stringas yra tuscias - log'as nespausdina
    console.log("Yes");
}   else {
    console.log("False");       // spausdina false, nes stringas tuscias = FALSE
}

console.log('----------------------');

console.log(true || true);      // arba
console.log(true || false);     // Jeigu bent vienas TRUE - renkasi TRUE
console.log(false || false);    // jeigu abu FALSE tik tada renkasi FALSE

console.log(0 || 1);

console.log('----------------------');

console.log(true && false);     // jei bent vienas FALSE - rinksis FALSE
console.log(false && false);
console.log(true && true);      // jeigu du TRUE, tik tada rinksis TRUE

if (8 > 5 || 4 < 3 || 6 > 4) {  // jeigu bent vienas TRUE - rinksis TRUE
    console.log('Yes');
}

if (8 > 5 && 4 < 3 && 6 > 4) {  // jeigu bent vienas FALSE - rinksis FALSE
    console.log('Yes');
}   else {
    console.log('no');
}

/* 

>   <===>   <=      // jeigu daugiau - verciam i maziau/arba/lygu // ir atvirksciai
<   <===>   >+      // jeigu maziau - verciam - daugiau/arba/lygu // ir atvirksciai

==  <===>   !=
||  <===>   &&

*/

console.log(+'6', '6', +'tep'); // pridedant + stringas kovertuojasi i skaiciu
console.log(!!'6', !6, !'0');
console.log(!!'6', !6, !0);
console.log('ddd', '' + 7);             // paverst stringu
console.log('ddd', '' + !!7, '' + !!0);

console.log('----------------------');

let kas = 'tas';

switch (kas) {
    case 'anas':
        console.log('ANAS');
    case 'tas':
        console.log('TAS');
    case 'antis':
        console.log('ANTIS');
    default:
        console.log('LABANAKT');
}

console.log('----------------------');
// su BREAK
switch (kas) {
    case 'anas':
        console.log('ANAS');
        break;
    case 'tas':
        console.log('TAS');
        break;
    case 'antis':
        console.log('ANTIS');
        break;
    default:
        console.log('LABANAKT');
        break;
}
let b;

if (3 < 7) {
    let a = 'valio';
    b = 'valio';
}

// console.log(a);
console.log(b);