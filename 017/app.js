console.log('OBJEKTAI');

let a = 'labas';   // pasleptas stringas // nors jis yra stringas, jis vistiek yra objektas

console.log(typeof a);  // i viska javascriptas ziuri kaip i objektus  
console.log(a.length);  // nes gali tureti ir kita reiksme, kaip stringo ilgi, kuris yra skaiciuojamas


let b = String('labas');    // atviras objektas
console.log(b);

console.log(String);

// !! objektai sukuriami pagal tam tikra plana. Planas kodas suplanuojamas klaseje
// !! stringas yra klase, kuri nurodo kaip pagaminamas stringo tipo objekta

let c = Array(55)
console.log(c);

let d = new String('labuka');   // console reprezentuoja kaip objekta
console.log(d);

// objektas yra reiksmiu ir funkciju samplaika

// !! visos klases rasomos didziaja raide kaip new String




String.prototype.tail = function() {        // egzistuojancios klases modifikacija pridedant nauja savybe (tail)
    return this.valueOf() + 'o********';
}
console.log(a.tail());

/////////////////////////////////////////////////////////////////////////////
console.log('------------Klases gaminimas--------------');

class Cat {

    constructor(n) {                             // constructor pasileidzia automatiskai ir iskarto gaminant katina
        console.log('Naujas Katinas');
        this.name = n ?? 'Bevardis';                       // prilyginu naujam constructor kintamajam n
    }

    miau = () => {                              // kadangi tai tik planas, apibrezti const nereikia
        console.log(this.name + ' Miauuu');     // cia n neveiks, veikia tik this.name
    }

    au(m = '') {
        console.log(this.name + ' auauau' + m);
    }
}


const myCat = new Cat('Pilkis');                // mycat yra objektas
const myCat222 = new Cat('Mikis');
const myCat22 = new Cat();

myCat.miau();                                   // console nereikia, nes jau yra viduje plano
myCat222.au(' loja');

console.log(myCat.name);
console.log(myCat222.name);
console.log(myCat22.name);


/////////////////////////////////////////////////////////////////////////////
console.log('------------Objektiniai Uzdaviniai--------------');
console.log('------------ 1 + 7 --------------');

class Kibiras1 {


    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose(){
        console.log(`Pririnkta viso: ${this.visiAkmenys} akmenų`);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    constructor() {
        this.akmenuKiekis = 0;
        
    }

    prideti1Akmeni = () => {
        this.akmenuKiekis++;
        this.constructor.bendrasAkmenuSkaicius(1);

    };

    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
        
    };

    kiekPririnktaAkmenu = () => {
        console.log(this.akmenuKiekis);
    };
};


const myKibiras = new Kibiras1();
myKibiras.prideti1Akmeni();
myKibiras.pridetiDaugAkmenu(12);
myKibiras.kiekPririnktaAkmenu();

const k2 = new Kibiras1()
k2.prideti1Akmeni();

const k3 = new Kibiras1()
k3.pridetiDaugAkmenu(9)

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

//////////////////////////////////////////////////

const m = new Map();

m.set("cat1", myCat);
m.set("cat2", myCat222);
m.set(myCat222, myCat22)



console.log(m);
console.log(m.get('cat2'));
console.log(m.get(myCat222));

//////////////////////////////////////////////////

console.log('------------ 2 + 6 --------------');

class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;

        this.centai = 0
        this.papier = 0
    }


    ideti(kiekis){
        if (kiekis <= 2) {
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
            this.centai++
        } else {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
            this.papier++
        }
    }

    skaiciuoti(suma){
        suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log('Pinigu suma pinigineje: ', suma);
    }

    monetos(mnt){
        mnt = this.centai;
        console.log('Monetu ideta: ', mnt);
    }

    banknotai(bnk){
        bnk = this.papier;
        console.log('Banknotu ideta: ', bnk);
    }
}

const bapkes = new Pinigine();

bapkes.ideti(2);
bapkes.ideti(10);
bapkes.ideti(10);
bapkes.ideti(10);
bapkes.ideti(1);
bapkes.ideti(1);
bapkes.ideti(2);

bapkes.skaiciuoti();

bapkes.monetos();
bapkes.banknotai();




//////////////////////////////////////////////////

console.log('------------ 3 + 4 --------------');

class Troleibusas {
    
    static registras = [];
    


    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    }

    static visiKeleiviai(keleiviai){
        this.registras.push(keleiviai);

    }


    constructor() {
        this.keleiviuSkaicius = 0;
        this.constructor.visiKeleiviai(this);
        
        
    }

    ilipa(kiek){
        this.keleiviuSkaicius = this.keleiviuSkaicius + kiek;

        
    }

    islipa(kiek) {
        this.keleiviuSkaicius = this.keleiviuSkaicius - kiek;
        
    }

    vaziuoja() {
        
        if (this.keleiviuSkaicius <= 0) {
            console.log('Troleibusas nevaziuoja');
        } else {
            console.log(`Troleibusu vaziuoja ${this.keleiviuSkaicius} zmoniu`);
        }
    }

    keleiviuSkaiciusVisuoseTroleibusuose(){
        
        
    }
}

console.log(Troleibusas.registras);




const trulikas = new Troleibusas();
const trulikas2 = new Troleibusas();
const trulikas3 = new Troleibusas();

////////////////////////// pirmas trulikas
trulikas.ilipa(10);
trulikas.islipa(6);
trulikas.islipa(6);

trulikas.vaziuoja();

////////////////////////// antras trulikas
trulikas2.ilipa(10);
trulikas2.islipa(6);
trulikas2.ilipa(6);

trulikas2.vaziuoja();

////////////////////////// antras trulikas
trulikas3.ilipa(5);
trulikas3.islipa(6);
trulikas3.ilipa(8);

trulikas3.vaziuoja();

//////////////////////////////////////////////////

console.log('------------ 5 map --------------');

class PirkiniuKrepselis {

    constructor(){
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.get("Surelis")) {
            let bendras = this.turinys.get("Surelis") + kiekis;
            this.turinys.set("Surelis", bendras);

        } else {
            this.turinys.set("Surelis", kiekis);
        }
        
        console.log(kiekis);
        
    }

    idetiPieno(kiekis) {
        if (this.turinys.get("Pienas")){
            let bendras = this.turinys.get("Pienas") + kiekis;
            this.turinys.set("Pienas", bendras);
        }   else {
            this.turinys.set("Pienas", kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if(this.turinys.get("Duona")){
            let bendras = this.turinys.get("Duona") + kiekis;
            this.turinys.set("Duona", bendras);
        }   else {
            this.turinys.set("Duona", kiekis);
        }
    }


    krepselioTurinys(){
        console.log(this.turinys);
    }


}

const kashikas = new PirkiniuKrepselis();

kashikas.idetiSureli(2);
kashikas.idetiSureli(3);
kashikas.idetiSureli(4);

kashikas.idetiPieno(5);
kashikas.idetiPieno(1);
kashikas.idetiPieno(2);

kashikas.idetiDuonos(10);
kashikas.idetiDuonos(1);
kashikas.idetiDuonos(2);

kashikas.krepselioTurinys();


//////////////////////////////////////////////////

console.log('------------ 8  --------------');

class Stikline {

    static type = 'Pepsi';      // pepsio objekto loge neras

    static registras = [];      // ipushinu kiek stikliniu sukuriu

    static naujaStikline(t) {                   // naujos stiklines kurimas
        return new this(t);                     // this kreipiasi i stikline
    }


    static whatType() {         // statinis metodas
        console.log('static');
        console.log(this.type);
    }


    static visosStiklines (stikline) {
        this.registras.push(stikline)

    }


    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
        this.constructor.visosStiklines(this);

    }
    

    ipilti(kiekis){
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }

    ispilti(){
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek;
    }

    stiklinejeYra(){
        console.log(`Stiklineje yra ${this.turis} ml yra ${this.kiekis} pepsio ${this.constructor.type}`); // tokiu budu pasiekti type
    }

}

const stXl = new Stikline(200);
const stM = new Stikline(150);
const stS = new Stikline(100);
stXl.ipilti(50);
stXl.ipilti(100);
stXl.ipilti(120);
stXl.ipilti(120);

console.log(stXl);
stXl.ispilti();
stXl.stiklinejeYra();

stXl.ipilti(stM.ispilti());
stM.stiklinejeYra();

console.log('-- uzdavini panaudojus return this --');
// tik tokiu atveju galima naudoti ipilti.ispilti (kombinuoti)

stM.ipilti(50).ispilti();
stM.stiklinejeYra();

stS.ipilti(stM.ipilti(50).ispilti());
stS.stiklinejeYra();


// 50 + 40 cia gaunas
stXl.ipilti(stM.ipilti(stS.ipilti(40).ispilti()).ispilti());
stXl.stiklinejeYra();



//////////////////////////////////////////////////////
console.log(Stikline);
console.log(Stikline.type);     // sukurta statika parodo tik taip, nes pririshtas prie stiklines


/////// statini metoda galima kviestis irgi tik is Stiklines (klases)

console.log(Stikline.whatType);
Stikline.whatType();

console.log(Stikline.registras);


// objektas gali susisiekti su klase (statiniu metodu), bet juo turi sneketis
Stikline.registras[0].ipilti(20);
stXl.stiklinejeYra();

const st = Stikline.naujaStikline(300)
console.log(st);




//////////////////////////////////////////////////

console.log('------------ 9  --------------');

/////////////////////////////////
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}


////////////////////////////////
class Grybas {

    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}


class Krepsys {


    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {
        if(grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }
}

const Kr = new Krepsys();

while(Kr.deti(new Grybas())){}

console.log(Kr);