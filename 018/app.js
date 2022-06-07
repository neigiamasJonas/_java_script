// STATIC prikalta prie klases

// Stiklines uzdavinyje, Turis nera prikaltas, jis keliauja per stiklines
// static yra uzdarytas klaseje ir niekur nekeliauja.
// Objektas nezino koki gerima turi (jei static - pepsi) ir info neatiduoda.

class Senelis {

    constructor() {
        this.name = 'Bronius';
    }

    miegoti() {
        console.log('knarkia');
    }
}


class Tevas extends Senelis {           

    barti() {
        console.log('Nu nu nu!');
    }
}


class Vaikutis extends Tevas {          // vaikas ismogsta barti extendinant. Ir tevas vaikui gali buti tik vienas

    constructor() {
        super();                        // super - overwritina senelio varda
        this.name = 'Petras';
    }


    bliauti(){ 
        console.log('beeee...');        // ta kuri bus apatine, gaus ir tevako isextendinta seneli
    }


}

const v = new Vaikutis();
v.bliauti();
v.barti();
v.miegoti();

console.log(v.name);                    // construktorius irgi issiextendino

const t = new Tevas();
t.barti();


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