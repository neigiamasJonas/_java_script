
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
header1.style.color = 'green';
header1.style.fontSize = '10px';
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
    console.log(e.target);
})


console.log('D) ---');
///////////////////////

