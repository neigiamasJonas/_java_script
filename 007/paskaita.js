// defer atideda JS veikima iki kol praeis visas html body
// narsykleje disable cache // networke (optional)

console.log('--------------------------------------------');


const tagH1 = document.querySelector('h1');

const tagH1a = document.querySelector('body :nth-child(2)');    // vienodas ele pasiekimas
const tagH1b = document.querySelector('h1 + h1');               // vienodas ele pasiekiams


console.log(tagH1);
console.log(tagH1a);
console.log(tagH1b);


console.log('--------------------------------------------');

const tagAll = document.querySelectorAll('h1');                 // selektinam visus nurodytus tagus
console.log(tagAll);
console.log(tagAll[0]);                                         // siekiant nodeList rasti atskira taga

tagAll.forEach(h1 => {                                          // su forEACH pasiekia tagus be node listo 
    console.log(h1);                                            // jei turim grupe, jai siaip negalim det css, nebent su foEACH
    h1.style.color = 'pink';
    h1.style.backgroundColor = 'black';
    h1.innerText = 'Valio';                     // keist teksta
    h1.innerHTML = '<i>Vasalas</i>';            // keisti ir teksta ir jo forma (keisti html)
});


console.log('----------------- EVENTAI -------------------');

//      1. susirandam taga < >
//      2. susirandam ivyki (event)
//      3. pradedam stebeti (vienu metu galima stebeti tik vieno elemento viena eventa)


const butt = document.querySelector('button');      // susiradom

butt.addEventListener('click', () => {              // callback yra funkcija, kada pasileidzia kai ivyksta eventas(ivykis);
    console.log('atliktas paspaudimas');
    butt.style.color = butt.style.color == 'red' ? "black" : "red";
});


tagAll.forEach(h1 => {
    h1.addEventListener('click', e => {             // e eventas
        console.log('atliktas paspaudimas');
        h1.style.color = h1.style.color == 'blue' ? "red" : "blue";
        console.log(e);
    })
   })

const tagA = document.querySelector('a');

tagA.addEventListener('click', e => {
    console.log('atliktas paspaudimas');
    e.preventDefault();                 // preventina default veikima
    e.target.style.color = 'red';      // target yra elementas ant kurio yra ivykes ivykis
});


document.querySelector('#vaikas').addEventListener('click', e => {
    e.stopPropagation();                                                // Norint sustabdyti BUBLINIMASI, kad tevas nepataptu raudonas spaudziant ant vaiko
    e.target.style.backgroundColor = 'red';
    console.log('vaikas');
});

document.querySelector('#tevas').addEventListener('click', e => {
    document.querySelector('#tevas').style.backgroundColor = 'red';
    console.log('tevas');
});