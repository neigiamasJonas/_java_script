function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

console.log('---------- 1) 2) -----------');

const array = [];

let countDaugiau = 0;


for (let i = 0; i < 30; i++){
    let randomNr = rand(5, 25);
    array.push(randomNr);

    if (randomNr > 10) {            // 2) a
        countDaugiau++;
    }
}

console.table(array);
console.log('Nr bigger than 10:', countDaugiau);          // 2) a


console.log('---------- 2) B');
//////////////////////////////

let biggest = Math.max(...array);
console.log('Biggest Nr in array:', biggest);

let countBiggestNr = 0;

array.forEach((v, i) => {
    if (v === biggest){
        countBiggestNr++;
        console.log('Index of biggest Nr:', i);
    }
})


console.log('---------- 2) C');
//////////////////////////////

let sumOfEven = 0;

array.forEach((v, i) => {
    if (i % 2 === 0) {
        sumOfEven += v;
    }
})

console.log('Sum of even Indexes values', sumOfEven);


console.log('---------- 2) D');
//////////////////////////////

const array2 = [];

array.forEach((v, i) => {
    array2.push(v - i);
})

console.log('1 uždavinio masyvo reikšmes minus tos reikšmės indeksas');
console.table(array2);

console.log('---------- 2) E');
//////////////////////////////

let extraNr = 0;

for (let i = 0; i < 10; i++) {
    array.push(rand(5, 25))
}

console.log('Extra 10 numbers pushed to array');
console.table(array);

console.log('---------- 2) F');
//////////////////////////////

const arrayEvenIndex = [];
const arrayOddIndex = [];

array.forEach((v, i) => {
    if (i % 2 === 0) {
        arrayEvenIndex.push(v);
    } else if (i % 2 !== 0) {
        arrayOddIndex.push(v)
    }
})

console.table(arrayEvenIndex);
console.table(arrayOddIndex);


console.log('---------- 2) G');
//////////////////////////////   ?????????

array.forEach((v, i) => {
    if (i % 2 === 0 && i > 15){
        array[i] = 0;
        
    }
})

console.table(array);


console.log('---------- 2) H');
//////////////////////////////  su break pabandyt

const smallestArray = [];

array.forEach ((v) => {
    if (v > 10){
        smallestArray.push(v);   
    }
})
console.log(smallestArray);

let smallest = Math.min(...smallestArray);
console.log('Maziausias skaicius didesnis uz 10:', smallest);



console.log('---------- 3) -----------');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
//////////////////////////////////////////

const raidesArray = [];

let raideA = 0;
let raideB = 0;
let raideC = 0;
let raideD = 0;

while (raidesArray.length < 200) {
    const random = rand(0, 3);

    if (random === 0){
        raidesArray.push('A');
        raideA++;
    } else if (random === 1) {
        raidesArray.push('B');
        raideB++;
    } else if (random === 2) {
        raidesArray.push('C');
        raideC++;
    } else if (random === 3) {
        raidesArray.push('D');
        raideD++
    }
}

console.log(raidesArray);

console.log('A raides kiekis masyve:', raideA);
console.log('B raides kiekis masyve:', raideB);
console.log('C raides kiekis masyve:', raideC);
console.log('D raides kiekis masyve:', raideD);


console.log('---------- 4) -----------');
/////////////////////////////////////////////

const raidesArray2 = [];

while (raidesArray2.length < 200) {
    const random = rand(0, 3);

    if (random === 0){
        raidesArray2.push('A');
        raideA++;
    } else if (random === 1) {
        raidesArray2.push('B');
        raideB++;
    } else if (random === 2) {
        raidesArray2.push('C');
        raideC++;
    } else if (random === 3) {
        raidesArray2.push('D');
        raideD++
    }
}
// console.log(raidesArray2);

const raidesArray3 = [];

while (raidesArray3.length < 200) {
    const random = rand(0, 3);

    if (random === 0){
        raidesArray3.push('A');
        raideA++;
    } else if (random === 1) {
        raidesArray3.push('B');
        raideB++;
    } else if (random === 2) {
        raidesArray3.push('C');
        raideC++;
    } else if (random === 3) {
        raidesArray3.push('D');
        raideD++
    }
}
// console.log(raidesArray3);



console.log('----- Sum of Arrays -----');
const arraySum = raidesArray.map((v, i) => v + raidesArray2[i] + raidesArray3[i]);
console.log(arraySum);



console.log('----- Finding unique elements -----');
const newArray = [...new Set(arraySum)];
console.log(newArray);



let unikaliuKiekis = 0;
newArray.forEach ((v, i) => {
    unikaliuKiekis = i + 1;
})
console.log(unikaliuKiekis);


// let unikalus = arraySum.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unikalus);


////    DUBLIKATU SURADIMAS     /////
// const dublikatai = arraySum => arraySum.filter((value, index) => arraySum.indexOf(value) !== index)
// const dublikatEle = dublikatai(arraySum);
// console.log(dublikatEle);


console.log('---------- 5) -----------');
/////////////////////////////////////////////

// const arrayNew1 = [];
// const arrayNew2 = [];

let arraySet1 = new Set();
let arraySet2 = new Set();

while (arraySet1.size < 100) {
    arraySet1.add(rand(100, 999));
}
// console.log(arraySet1);
const arrayNew1 = [...arraySet1];
console.log(arrayNew1);


while (arraySet2.size < 100) {
    arraySet2.add(rand(100, 999));
}
const arrayNew2 = [...arraySet2];
console.log(arrayNew2);

console.log('---------- 6) -----------');
/////////////////////////////////////////////

const arrayNew3 = [];
const arrayNew4 = [];

 arrayNew1.forEach((num1, index) => {
  const num2 = arrayNew2[index];
  if (num1 !== num2) {
    arrayNew3.push(num1)
  } else {
      console.log('Atsikartojantis kaicius masyvuose:', num1);
      arrayNew4.push(num1)
  }
});
console.log(arrayNew3);

console.log('---------- 7) -----------');
/////////////////////////////////////////////


console.log(arrayNew4);


console.log('---------- 8) -----------');
/////////////////////////////////////////////

// const arrayNew5 = [];

// arrayNew1.forEach((v, i) => {

//     arrayNew5.push(arrayNew2[i]);
// })

// console.log(arrayNew5);
// console.table(arrayNew5);

// arrayNew5.forEach((v, i) => {
//     for (a in arrayNew5) {
//         a = arrayNew1[i];
//     }
// })

// console.log(arrayNew5);

// function arraymove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, element);
// }

console.log('---------- 9) -----------');
/////////////////////////////////////////////


const arrayNew6 = [rand(5, 25), rand(5, 25)];

for (let i = 2; i < 10; i++) {
    arrayNew6.push(arrayNew6[i - 1] + arrayNew6[i - 2]);
}

console.log(arrayNew6);