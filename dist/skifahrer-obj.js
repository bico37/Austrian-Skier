"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skiMapSkiers = exports.worldCupSkier = exports.skiers = void 0;
let hirscher = {
    name: "Marcel Hirscher",
    img: "../img/Skiers/hirscher.jpg",
    age: 34,
    born: "Hallein, Salzburg, Austria",
    skiBrand: "VAN DEER-Red Bull Sports",
    disziplin: "Slalom, Riesenslalom, Super-G, Kombination",
    wins: 67,
    specialWin: "Goldmedaillen im Riesenslalom und in der Kombination, Olympische Winterspiele 2018",
    status: false
};
let matt = {
    name: "Mario Matt",
    img: "../img/Skiers/matt.jpg",
    age: 44,
    born: "Zams, Tyrol, Austria",
    skiBrand: "Rossignol",
    disziplin: "Slalom, Riesenslalom, Kombination",
    wins: 15,
    specialWin: "Olympiasieger (2014), zweimal Weltmeister (2001 und 2007)",
    status: false
};
let maier = {
    name: "Hermann Maier",
    img: "../img/Skiers/maier.jpg",
    age: 51,
    born: "Altenmarkt im Pongau, Salzburg, Austria",
    skiBrand: "Head, Atomic",
    disziplin: "Super-G, Abfahrt, Riesenslalom, Kombination",
    wins: 54,
    specialWin: "Vier Gesamtweltcup-Titel, zwei olympische Goldmedaillen, drei Weltmeisterschaftstitel",
    status: false
};
let schwarz = {
    name: "Marco Schwarz",
    img: "../img/Skiers/schwarz.jpg",
    age: 28,
    born: "Villach, Kärnten, Österreich",
    skiBrand: "Atomic",
    disziplin: "Slalom, Riesenslalom, Kombination",
    wins: 6,
    specialWin: "Weltmeister in der Kombination 2021, Slalom-Weltcup 2020/21",
    status: true
};
let feller = {
    name: "Manuel Feller",
    img: "../img/Skiers/feller.jpg",
    age: 31,
    born: "Jenbach, Tirol, Österreich",
    skiBrand: "Atomic",
    disziplin: "Slalom, Riesenslalom",
    wins: 5,
    specialWin: "Weltmeister im Slalom 2021",
    status: true
};
let kriechmayr = {
    name: "Vincent Kriechmayr",
    img: "../img/Skiers/kriechmayr.jpg",
    age: 32,
    born: "Linz, Oberösterreich, Österreich",
    skiBrand: "Fischer",
    disziplin: "Abfahrt, Super-G",
    wins: 17,
    specialWin: "Doppelweltmeister in Abfahrt und Super-G 2021",
    status: true
};
let mayer = {
    name: "Matthias Mayer",
    img: "../img/Skiers/mayer.jpg",
    age: 33,
    born: "Afritz am See, Kärnten, Österreich",
    skiBrand: "Head",
    disziplin: "Abfahrt, Super-G",
    wins: 11,
    specialWin: "Dreifacher Olympiasieger (2014, 2018, 2022)",
    status: false
};
let klammer = {
    name: "Franz Klammer",
    img: "../img/Skiers/klammer.jpg",
    age: 70,
    born: "Mooswald, Kärnten, Österreich",
    skiBrand: "Fischer",
    disziplin: "Abfahrt",
    wins: 26,
    specialWin: "Olympiasieger in der Abfahrt 1976",
    status: false
};
let eberharter = {
    name: "Stephan Eberharter",
    img: "../img/Skiers/eberharter.jpg",
    age: 54,
    born: "Brixlegg, Österreich",
    skiBrand: "Atomic",
    disziplin: "Abfahrt, Super-G, Riesenslalom, Slalom, Kombination",
    wins: 29,
    specialWin: "Olympische Goldmedaille, drei Weltmeistertitel",
    status: false
};
let sailer = {
    name: "Toni Sailer",
    img: "../img/Skiers/sailer.jpg",
    age: 73,
    born: "Kitzbühel, Österreich",
    skiBrand: "ToniSailerSports",
    disziplin: "Abfahrt, Riesenslalom, Slalom, Kombination",
    wins: -1,
    specialWin: "Drei olympische Goldmedaillen, sieben Weltmeistertitel",
    status: false
};
let reichelt = {
    name: "Hannes Reichelt",
    img: "../img/Skiers/reichelt.jpg",
    age: 43,
    born: "Altenmarkt im Pongau, Salzburg, Österreich",
    skiBrand: "Salomon",
    disziplin: "Abfahrt, Super-G, Riesenslalom",
    wins: 13,
    specialWin: "Weltmeister im Super-G 2015",
    status: false
};
let moserProell = {
    name: "Annemarie Moser-Pröll",
    img: "../img/Skiers/moserProell.jpg",
    age: 70,
    born: "Kleinarl, Salzburg, Österreich",
    skiBrand: "Atomic",
    disziplin: "Abfahrt, Riesenslalom, Slalom, Kombination",
    wins: 62,
    specialWin: "Olympiasiegerin in der Abfahrt 1980",
    status: false
};
let veith = {
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
let goergl = {
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
let schild = {
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
let schranzWC = {
    name: "Karl Schranz",
    img: "../img/WorldCupSkier/schranzWC.jpg",
    timesWon: 2,
    yearWon: "1969, 1970",
    retartedYear: 1972
};
let maierWC = {
    name: "Hermann Maier",
    img: "../img/WorldCupSkier/maierWC.jpg",
    timesWon: 4,
    yearWon: "1998, 2000, 2001, 2004",
    retartedYear: 2009
};
let eberharterWC = {
    name: "Stephan Eberharter",
    img: "../img/WorldCupSkier/eberharterWC.jpg",
    timesWon: 2,
    yearWon: "2002, 2003",
    retartedYear: 2004
};
let raichWC = {
    name: "Benjamin Raich",
    img: "../img/WorldCupSkier/raichWC.jpg",
    timesWon: 1,
    yearWon: "2006",
    retartedYear: 2015
};
let hirscherWC = {
    name: "Marcel Hirscher",
    img: "../img/WorldCupSkier/hirscherWC.jpg",
    timesWon: 8,
    yearWon: "2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019",
    retartedYear: 2019
};
let gablWC = {
    name: "Gertrude Gabl",
    img: "../img/WorldCupSkier/gablWC.jpg",
    timesWon: 1,
    yearWon: "1969",
    retartedYear: 1972
};
let moserProellWC = {
    name: "Annemarie Moser-Pröll",
    img: "../img/WorldCupSkier/moserProellWC.png",
    timesWon: 6,
    yearWon: "1971, 1972, 1973, 1974, 1975, 1979",
    retartedYear: 1980
};
let kronbergerWC = {
    name: "Petra Kronberger",
    img: "../img/WorldCupSkier/kronbergerWC.jpg",
    timesWon: 3,
    yearWon: "1990, 1991, 1992",
    retartedYear: 1992
};
let wachterWC = {
    name: "Anita Wachter",
    img: "../img/WorldCupSkier/wachterWC.jpg",
    timesWon: 1,
    yearWon: "1993",
    retartedYear: 2001
};
let meissnitzerWC = {
    name: "Alexandra Meissnitzer",
    img: "../img/WorldCupSkier/meissnitzerWC.jpg",
    timesWon: 1,
    yearWon: "1999",
    retartedYear: 2008
};
let goetschlWC = {
    name: "Renate Götschl",
    img: "../img/WorldCupSkier/goetschlWC.jpg",
    timesWon: 1,
    yearWon: "2000",
    retartedYear: 2009
};
let dorfmeisterWC = {
    name: "Michaela Dorfmeister",
    img: "../img/WorldCupSkier/dorfmeisterWC.jpg",
    timesWon: 1,
    yearWon: "2002",
    retartedYear: 2006
};
let hospWC = {
    name: "Nicole Hosp",
    img: "../img/WorldCupSkier/hospWC.jpg",
    timesWon: 1,
    yearWon: "2007",
    retartedYear: 2015
};
let veithWC = {
    name: "Anna Veith",
    img: "../img/WorldCupSkier/veithWC.jpg",
    timesWon: 2,
    yearWon: "2014, 2015",
    retartedYear: 2020
};
exports.skiers = [
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
exports.worldCupSkier = [
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
exports.skiMapSkiers = [
    hirscher,
    schwarz,
    feller,
    kriechmayr,
    maier,
    mayer
];
