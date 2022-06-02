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