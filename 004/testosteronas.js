// vienas kates apejimas gali pagaut nuo 3 iki 5 peliu
// kiek kartu kate apsisuks aplink nama, kad butu pagauta nemaziau nei 20 peliu.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let kate = 0;
let ziurke = 0;

while (ziurke < 20) {
    ziurke += rand(3, 5);

    kate++
    console.log(ziurke);
}

console.log('Kate pagavo ziurkiu:', ziurke);
console.log(`Kate aplink nama apejo ${kate} kartus`);