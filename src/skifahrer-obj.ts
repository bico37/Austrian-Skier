export interface Skier {
    name: string;   //name
    img: string;    //bild
    age: number;    //alter
    born: string;   //wo geboren
    skiBrand: string;   //ski Marke
    disziplin: string;  //disziplin
    wins: number;       //wie viel siege
    specialWin: string; //special win wie wc oda so
    status: boolean;    //noch aktiv oder zurückgetreten
}

export interface totalWorldCupSkiers {
    name: string;   //name
    img: string;    //Bild mit world cup  
    timesWon: number;   //wie oft world cup gewonnen
    yearWon: String;    //in welchen Jahren gewonnen
    retartedYear: number; //jahr wo zurück getreten
}

// Skiers
//Männer: Marcel Hirscher, Mario Matt, Hermann Maier, Marco Schwarz, Manuel Feller, Vincent Kriechmayr
//        Matthias Mayr, Franz Klammer, Stefan Eberharter, Toni Sailer, Hannes Reichelt
//Frauen: Annemarie Moser-Pröll, Anna Veiht, Elisabeth Görgel, Marlies schild, 

//Marcel Hirscher
let hirscher: Skier = {
    name: "Marcel Hirscher",
    img: "../img/Skiers/hirscher.jpg",
    age: 34,
    born: "Hallein, Salzburg, Austria",
    skiBrand: "VAN DEER-Red Bull Sports",
    disziplin: "Slalom, Riesenslalom, Super-G, Kombination",
    wins: 67,
    specialWin: "Goldmedaillen im Riesenslalom und in der Kombination, Olympische Winterspiele 2018",
    status: false
}

//Mario Matt
let matt: Skier = {
    name: "Mario Matt",
    img: "../img/Skiers/matt.jpg",
    age: 44,
    born: "Zams, Tyrol, Austria",
    skiBrand: "Rossignol",
    disziplin: "Slalom, Riesenslalom, Kombination",
    wins: 15,
    specialWin: "Olympiasieger (2014), zweimal Weltmeister (2001 und 2007)",
    status: false
}

//Hermann Maier
let maier: Skier = {
    name: "Hermann Maier",
    img: "../img/Skiers/maier.jpg",
    age: 51,
    born: "Altenmarkt im Pongau, Salzburg, Austria",
    skiBrand: "Head, Atomic",
    disziplin: "Super-G, Abfahrt, Riesenslalom, Kombination",
    wins: 54,
    specialWin: "Vier Gesamtweltcup-Titel, zwei olympische Goldmedaillen, drei Weltmeisterschaftstitel",
    status: false
}

//Marco Schwarz
let schwarz: Skier = {
    name: "Marco Schwarz",
    img: "../img/Skiers/schwarz.jpg",
    age: 28,
    born: "Villach, Kärnten, Österreich",
    skiBrand: "Atomic",
    disziplin: "Slalom, Riesenslalom, Kombination",
    wins: 6,
    specialWin: "Weltmeister in der Kombination 2021, Slalom-Weltcup 2020/21",
    status: true
}

//Manuel Feller
let feller: Skier = {
    name: "Manuel Feller",
    img: "../img/Skiers/feller.jpg",
    age: 31,
    born: "Jenbach, Tirol, Österreich",
    skiBrand: "Atomic",
    disziplin: "Slalom, Riesenslalom",
    wins: 5,
    specialWin: "Weltmeister im Slalom 2021",
    status: true
}

//Vincent Kriechmayr
let kriechmayr: Skier = {
    name: "Vincent Kriechmayr",
    img: "../img/Skiers/kriechmayr.jpg",
    age: 32,
    born: "Linz, Oberösterreich, Österreich",
    skiBrand: "Fischer",
    disziplin: "Abfahrt, Super-G",
    wins: 17,
    specialWin: "Doppelweltmeister in Abfahrt und Super-G 2021",
    status: true
}

//Matthias Mayr
let mayer: Skier = {
    name: "Matthias Mayer",
    img: "../img/Skiers/mayer.jpg",
    age: 33,
    born: "Afritz am See, Kärnten, Österreich",
    skiBrand: "Head",
    disziplin: "Abfahrt, Super-G",
    wins: 11,
    specialWin: "Dreifacher Olympiasieger (2014, 2018, 2022)",
    status: false
}

//Franz Klammer
let klammer: Skier = {
    name: "Franz Klammer",
    img: "../img/Skiers/klammer.jpg",
    age: 70,
    born: "Mooswald, Kärnten, Österreich",
    skiBrand: "Fischer",
    disziplin: "Abfahrt",
    wins: 26,
    specialWin: "Olympiasieger in der Abfahrt 1976",
    status: false
}

//Stefan Eberharter
let eberharter: Skier = {
    name: "Stephan Eberharter",
    img: "../img/Skiers/eberharter.jpg",
    age: 54,
    born: "Brixlegg, Österreich",
    skiBrand: "Atomic",
    disziplin: "Abfahrt, Super-G, Riesenslalom, Slalom, Kombination",
    wins: 29,
    specialWin: "Olympische Goldmedaille, drei Weltmeistertitel",
    status: false
}

//Toni Sailer
let sailer: Skier = {
    name: "Toni Sailer",
    img: "../img/Skiers/sailer.jpg",
    age: 73,
    born: "Kitzbühel, Österreich",
    skiBrand: "ToniSailerSports",
    disziplin: "Abfahrt, Riesenslalom, Slalom, Kombination",
    wins: -1,
    specialWin: "Drei olympische Goldmedaillen, sieben Weltmeistertitel",
    status: false
}

//Hannes Reichelt
let reichelt: Skier = {
    name: "Hannes Reichelt",
    img: "../img/Skiers/reichelt.jpg",
    age: 43,
    born: "Altenmarkt im Pongau, Salzburg, Österreich",
    skiBrand: "Salomon",
    disziplin: "Abfahrt, Super-G, Riesenslalom",
    wins: 13,
    specialWin: "Weltmeister im Super-G 2015",
    status: false
}

// **************************************
// *************FRAUEN*******************
// **************************************

//Annemarie Moser Pröll
let moserProell: Skier = {
    name: "Annemarie Moser-Pröll",
    img: "../img/Skiers/moserProell.jpg",
    age: 70,
    born: "Kleinarl, Salzburg, Österreich",
    skiBrand: "Atomic",
    disziplin: "Abfahrt, Riesenslalom, Slalom, Kombination",
    wins: 62,
    specialWin: "Olympiasiegerin in der Abfahrt 1980",
    status: false
}

//Anna Veith
let veith: Skier = {
    name: "Anna Veith",
    img: "../img/Skiers/veith.jpg",
    age: 34,
    born: "Hallein, Österreich",
    skiBrand: "Head",
    disziplin: "Abfahrt, Super-G, Riesenslalom, Slalom, Kombination",
    wins: 15,
    specialWin: "Olympiasieg im Super-G bei den Olympischen Winterspielen 2014",
    status: false
};

//Elisabeth Görgl
let goergl: Skier = {
    name: "Elisabeth Görgl",
    img: "../img/Skiers/goergl.jpg",
    age: 42,
    born: "Bruck an der Mur, Österreich",
    skiBrand: "Head",
    disziplin: "Abfahrt, Super-G, Riesenslalom, Slalom, Kombination",
    wins: 7,
    specialWin: "Doppelweltmeistertitel 2011 im Super-G und in der Abfahrt",
    status: false
};

//Marlies Schild
let schild: Skier = {
    name: "Marlies Schild",
    img: "../img/Skiers/schild.jpg",
    age: 42,
    born: "Admont, Österreich",
    skiBrand: "Atomic",
    disziplin: "Slalom, Riesenslalom, Super-G, Abfahrt, Kombination",
    wins: 37,
    specialWin: "Weltmeisterin 2011 im Slalom",
    status: false
};


// **************************************
// *********TOTAL WORLD CUP SKIER********
// **************************************
//Karl Schranz, Hermann Mair, Stephan Eberharter, Benjamin Raich, Marcel Hirscher
//Gertrude Gabl, Annemarie Moser Pröll, Petra Kronberger, Anita Wachter, Alexander Meissnitzer, Renate Götschl, Michaela Dorfmeister, Nicole Hosp, Anna Fenninger

//HERREN
//Karl Schranz
let schranzWC: totalWorldCupSkiers = {
    name: "Karl Schranz",
    img: "../img/WorldCupSkier/schranzWC.jpg",
    timesWon: 2,
    yearWon: "1969, 1970",
    retartedYear: 1972
};

//Hermann Maier
let maierWC: totalWorldCupSkiers = {
    name: "Hermann Maier",
    img: "../img/WorldCupSkier/maierWC.jpg",
    timesWon: 4,
    yearWon: "1998, 2000, 2001, 2004",
    retartedYear: 2009
};

//Stephan Eberharter
let eberharterWC: totalWorldCupSkiers = {
    name: "Stephan Eberharter",
    img: "../img/WorldCupSkier/eberharterWC.jpg",
    timesWon: 2,
    yearWon: "2002, 2003",
    retartedYear: 2004
};

//Benjamin Raich
let raichWC: totalWorldCupSkiers = {
    name: "Benjamin Raich",
    img: "../img/WorldCupSkier/raichWC.jpg",
    timesWon: 1,
    yearWon: "2006",
    retartedYear: 2015
};

//Marcel Hirscher
let hirscherWC: totalWorldCupSkiers = {
    name: "Marcel Hirscher",
    img: "../img/WorldCupSkier/hirscherWC.jpg",
    timesWon: 8,
    yearWon: "2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019",
    retartedYear: 2019
};

//FRAUEN
//Gertrude Gabl
let gablWC: totalWorldCupSkiers = {
    name: "Gertrude Gabl",
    img: "../img/WorldCupSkier/gablWC.jpg",
    timesWon: 1,
    yearWon: "1969",
    retartedYear: 1972
};

//Annemarie Moser Pröll
let moserProellWC: totalWorldCupSkiers = {
    name: "Annemarie Moser-Pröll",
    img: "../img/WorldCupSkier/moserProellWC.png",
    timesWon: 6,
    yearWon: "1971, 1972, 1973, 1974, 1975, 1979",
    retartedYear: 1980
};

//Petra Kronberger
let kronbergerWC: totalWorldCupSkiers = {
    name: "Petra Kronberger",
    img: "../img/WorldCupSkier/kronbergerWC.jpg",
    timesWon: 3,
    yearWon: "1990, 1991, 1992",
    retartedYear: 1992
};

//Anita Wachter
let wachterWC: totalWorldCupSkiers = {
    name: "Anita Wachter",
    img: "../img/WorldCupSkier/wachterWC.jpg",
    timesWon: 1,
    yearWon: "1993",
    retartedYear: 2001
};

//Alexander Meissnitzer
let meissnitzerWC: totalWorldCupSkiers = {
    name: "Alexandra Meissnitzer",
    img: "../img/WorldCupSkier/meissnitzerWC.jpg",
    timesWon: 1,
    yearWon: "1999",
    retartedYear: 2008
};

//Renate Götschl
let goetschlWC: totalWorldCupSkiers = {
    name: "Renate Götschl",
    img: "../img/WorldCupSkier/goetschlWC.jpg",
    timesWon: 1,
    yearWon: "2000",
    retartedYear: 2009
};

//Michaela Dorfmeister
let dorfmeisterWC: totalWorldCupSkiers = {
    name: "Michaela Dorfmeister",
    img: "../img/WorldCupSkier/dorfmeisterWC.jpg",
    timesWon: 1,
    yearWon: "2002",
    retartedYear: 2006
};

//Nicole Hosp
let hospWC: totalWorldCupSkiers = {
    name: "Nicole Hosp",
    img: "../img/WorldCupSkier/hospWC.jpg",
    timesWon: 1,
    yearWon: "2007",
    retartedYear: 2015
};

//Anna Veith
let veithWC: totalWorldCupSkiers = {
    name: "Anna Veith",
    img: "../img/WorldCupSkier/veithWC.jpg",
    timesWon: 2,
    yearWon: "2014, 2015",
    retartedYear: 2020
};


export let skiers: Skier[] = [
    hirscher,
    matt,
    maier,
    schwarz,
    feller,
    kriechmayr,
    mayer,
    klammer,
    eberharter,
    sailer,
    reichelt,
    moserProell,
    veith,
    goergl,
    schild
];


export let worldCupSkier: totalWorldCupSkiers[] = [
    schranzWC,
    maierWC,
    eberharterWC,
    raichWC,
    hirscherWC,
    gablWC,
    moserProellWC,
    kronbergerWC,
    wachterWC,
    meissnitzerWC,
    goetschlWC,
    dorfmeisterWC,
    hospWC,
    veithWC
];

export let skiMapSkiers: Skier[] = [
    hirscher,
    schwarz,
    feller, 
    kriechmayr,
    maier,
    mayer
]