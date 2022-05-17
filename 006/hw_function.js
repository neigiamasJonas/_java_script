

console.log('------------ rand --------------');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('----------- 1) ------------');
// 1 )Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

const textF = function(text) {
    return console.log(text);
}
textF('as');


console.log('----------- 2) ------------');

const twoArguments = function(text, nr) {
    let tekstas = '';
    
    for (let i = 0; i < nr; i++) {
        tekstas += text + ' ';
    }
    return console.log(tekstas);
}

twoArguments('As', 5);

console.log('---------------');

const twoArguments2 = function(text, nr) {
    for (let i = 0; i < nr; i++) {
        console.log(text);;
    }
}

twoArguments2('As', 4);


console.log('----------- 4) ------------');
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)


const prime = function (nr) {
    let count = 0;

    for (let i = 2; i < nr; i++) {
        if (nr % i === 0) {
            count++;
            // console.log(`Skaicius ${nr} dalinasi is:`, i);
        }
        // if (count === 0) {
        //     console.log(`Skaicius ${nr} neturi dalikliu ir yra pirminis skaicius`);
        //     break;
        // }
    
    }
    return count;
}
console.log(prime(6));



console.log('----------- 5) ------------');


const array = [];

for (let i = 0; i < 100; i++) {
    array.push(rand(33, 77));
}
console.log(array);

console.log(array.sort((a, b) => prime(b) - prime(a)));


console.log('----------- 6) ------------');





console.log('----------- 7) ------------');

const monsterSize = rand(10, 30);

const makeArray = () => {
    const array = [];
    const size = rand(10, 20);

    for (let i = 0; i < size; i++) {
        array.push(rand(0, 10));
    }
    return array;
}

let monster = []
for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) {
    const monsterPart = makeArray();

    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
    }
    monster = monsterPart;

}

console.log(monster);


console.log('----------- 8) ------------');




console.log('----------- 9) ------------');

const arrayTrys = [rand(1, 33), rand(1, 33), rand(1, 33)];

const yesOrNo = masyvas => {
    last3 = masyvas.slice(-3)
    // console.log(last3);

    for (let i = 0; i < 3; i++) {
        if (prime(last3[i])) {
            return true;
        }
    }
    return false;
}


while(yesOrNo(arrayTrys)) {
    arrayTrys.push(rand(1, 33))
}

console.log(arrayTrys);



console.log('----------- 10) ------------');

const sqArray = [];

for (let i = 0; i < 10; i++){
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
    }
    sqArray.push(row);
}

const primeSum = a => {
    let sum = 0;
    let count = 0;

    a.forEach(masyvas => masyvas.forEach(v => {
        if (prime(v) == 0) {                        // arba (!prime(v))   !!!!!!!!!!!!
            count++;
            sum += v;
            // console.log(v);
        }
        
    }))
    return count ? sum / count : 0;
}


console.log(primeSum(sqArray));

const findMin = a => {
    let min = a[0][0];
    let coord = [0, 0];
    a.forEach((r, ri) => r.forEach((v, ci) => {
        if (v < min) {
            min = v;
            coord = [ri, ci];
        }
    }));
    return coord;
}

console.table(sqArray);

console.log(findMin(sqArray));

let s = 1000;

while(primeSum(sqArray) < 70){
    if(--s === 0) {
        console.log('BR')
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;

}

console.table(sqArray);