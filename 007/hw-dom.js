
console.log('------- 1) Atskiri elementai ---------');
console.log('A) ---');
///////////////////////

const tagH1 = document.querySelector('h1');
console.log(tagH1);
tagH1.style.color = 'green';


console.log('B) ---');
///////////////////////


const tagI = document.querySelector('i');
console.log(tagI);
tagI.classList.add('small')


console.log('C) ---');
///////////////////////


tagH1.classList.remove('main')


console.log('D) ---');
///////////////////////


const tagH2 = document.querySelector('body :nth-child(2)')
console.log(tagH2);

tagH2.classList.remove('main');
tagH2.classList.add('first');


console.log('E) ---');
///////////////////////

const tagSpan = document.querySelector('h2 span');
console.log(tagSpan);

tagSpan.style.fontSize = '10px';
tagSpan.style.color = 'gray';







console.log('------ 2)  Elemetų grupės (nodeList) skaičiavimus išvest į consolę -----');
console.log('A) ---');
///////////////////////

const nodeList1 = document.querySelectorAll('h2');

console.log(nodeList1.length);


console.log('B) ---');
///////////////////////
let count = 0;

nodeList1.forEach(h2 => {
    if (h2.classList.contains('first')) {
        count ++;
    };
});
console.log(count);


console.log('C) ---');
///////////////////////

nodeList1.forEach(h2 => {
    console.log(h2);
    h2.style.color = 'lightBlue';
})


console.log('D) ---');
///////////////////////


const tagDiv = document.querySelectorAll('.prices h2');
console.log(tagDiv);
tagDiv.forEach(h2 => {
    h2.classList.add('price-tag');
})


console.log('E) ---');
///////////////////////

const classNew = document.querySelectorAll('.new');

classNew.forEach (n => {
    n.style.textDecoration = 'underline';
    console.log(n);
})


console.log('F) ---');
///////////////////////

const animalList = document.querySelectorAll('ul');
console.log(animalList.length);


console.log('G) ---');
///////////////////////


animalList.forEach (n => {
    n.style.border = "1px solid black";
    n.style.padding = '15px, 50px';
    console.log(n);
})


console.log('H) I) ---');
///////////////////////

const animalNew1 = document.querySelectorAll('#plesrunai .new');
console.log('Plesrunuose su klase new', animalNew1.length);
console.log(animalNew1);

const animalNew2 = document.querySelectorAll('#zoliaedziai .new');
console.log('Zoliaedziuose su klase new', animalNew2.length);
console.log(animalNew2);

console.log('Bendrai gyvunu su klase new', animalNew1.length + animalNew2.length);





console.log('------ 3)  Elementų events -----');
console.log('A) ---');
///////////////////////

const header1 = document.querySelector('fieldset legend');

document.querySelector('#h1-color').addEventListener('click', () => {
    header1.style.color = 'green';
})


document.querySelector('#h1-font').addEventListener('click', () => {
    header1.style.fontSize = '10px';;
})

console.log(header1);


console.log('B) ---');
///////////////////////

tagI.addEventListener('click', e => {
    console.log('Tag <i> paspaudziamas');
    // e.preventDefault();
    tagI.style.fontWeight = 'bold';
})


console.log('C) ---');
///////////////////////


document.querySelector('.prices').addEventListener('click', e => {
    e.target.style.backgroundColor = e.target.style.backgroundColor == 'white' ? 'gray' : 'white';
    console.log(e.target, 'paspaudziamas');
})


console.log('D) ---');
///////////////////////

document.querySelector('#contacts').addEventListener('click', e => {
    e.target.style.color = 'orange';
})


console.log('E) ---');
///////////////////////

document.querySelector('#contacts u').addEventListener('click', e => {
    document.querySelector('#contacts').style.fontSize = '20px';
})


console.log('F) ---');
/////////////////////// nuimti stilius nuo tago su = NULL !!!

document.querySelector('#contacts b').addEventListener('click', e => {
    document.querySelector('#contacts').style.color = null;
    document.querySelector('#contacts').style.fontSize = null;
})


console.log('G) ---');
///////////////////////

document.querySelector('#h1-color-back').addEventListener('click', () => {
    header1.style.color = null;
})

document.querySelector('#h1-font-back').addEventListener('click', () => {
    header1.style.fontSize = null;
})





console.log('------ 4)  Elementų grupių events -----');
console.log('A) ---');
///////////////////////

const animalsNot = document.querySelectorAll('.animals .new')

animalsNot.forEach(n => {
    n.addEventListener('dblclick', e => {
        e.target.style.color = 'red';
    })
})




console.log('B) ---');
///////////////////////

const animalLi = document.querySelectorAll('ul li')
console.log(animalLi);

animalLi.forEach(n => {
    
    if (!n.classList.contains('like-button')){
        console.log(n);

        n.addEventListener('click', e => {
            e.target.style.fontSize = "130%";
        })
    }
})



console.log('C) ---');
///////////////////////


document.querySelectorAll('.like-button').forEach(n => {
    n.addEventListener('click', () => {
        document.querySelectorAll('ul').forEach(b => {
            b.classList.add('like');
        })
    })
})




console.log('------ 5)  Dinaminis elementų kūrimas (su createElement) -----');
console.log('A) ---');
///////////////////////

const prices = document.querySelector('.prices');

let ele = document.createElement('h2');   // pirma reikia susikurti elementa

prices.appendChild(ele)                 // tada su append prideti ta elementa i tevini taga
console.log(prices);

ele.innerHTML = "Senjorai tik: 1.99 eur";
ele.classList.add('price-tag');



console.log('B) ---');
///////////////////////

let ele2 = document.createElement('h2');
prices.appendChild(ele2);

ele2.innerHTML = 'Senjorų grupė iki 10: tik 5.99 eur'
ele2.classList.add('new', 'price-tag')
ele2.addEventListener('click', e => {
    e.target.style.color = 'green';
})



console.log('C) ---');
///////////////////////


const ulialia = document.querySelectorAll('ul');

const patinka = document.querySelectorAll('.like-button');
console.log(patinka);

let ele3 = document.createElement('li')
ele3.innerHTML= 'NEPATINKA';
console.log(ele3);

patinka.forEach(n => {
    ulialia.after(ele3, patinka)
})