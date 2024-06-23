var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoDiSpecializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoDiSpecializzazione = ambitoDiSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = []; // Inizializzazione dell'array
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categoriaDiContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Pubblicando contenuto da ".concat(professionista.nome, " ").concat(professionista.cognome, ": ").concat(contenuto));
    };
    return Piattaforma;
}());
// Istanziazione di oggetti ProfessionistaMedia
var professionista1 = new ProfessionistaMedia("Martina", "Ruggeri", "Fotografia", 7, ["arte visiva", "ritratti"]);
var professionista2 = new ProfessionistaMedia("Elena", "Ferrari", "Montaggio", 10, ["film", "video musicali"]);
var professionista3 = new ProfessionistaMedia("Chiara", "Marchetti", "Sceneggiatura", 4, ["televisione", "teatro"]);
// Istanziazione di oggetti ProgrammaFormazione
var programma1 = new ProgrammaFormazione("Creatività Digitale", "Corso per sviluppare competenze digitali avanzate", "Fotografia", 25);
var programma2 = new ProgrammaFormazione("Tecniche di Montaggio", "Corso avanzato di montaggio video", "Montaggio", 50);
var programma3 = new ProgrammaFormazione("Scrittura Creativa", "Laboratorio di sceneggiatura per il teatro e la TV", "Sceneggiatura", 35);
// Le professioniste partecipano ai programmi di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
professionista3.partecipaProgramma(programma3);
// Istanziazione di oggetti Piattaforma
var piattaforma1 = new Piattaforma("Artisti Digitali", "sito web", "Piattaforma per promuovere l’arte digitale", ["fotografia", "grafica", "design"]);
var piattaforma2 = new Piattaforma("Visione Creativa", "canale YouTube", "Canale per video creativi", ["film", "video musicali"]);
var piattaforma3 = new Piattaforma("Storie in Scena", "blog", "Blog dedicato alla sceneggiatura", ["televisione", "teatro"]);
// Pubblicazione dei contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(professionista1, "Una galleria di ritratti d'autore");
piattaforma1.pubblicaContenuto(professionista2, "Un video musicale sperimentale");
piattaforma2.pubblicaContenuto(professionista3, "Un cortometraggio di teatro moderno");
piattaforma3.pubblicaContenuto(professionista1, "Esplorazione della fotografia contemporanea");
piattaforma3.pubblicaContenuto(professionista2, "Tecniche avanzate di montaggio video");
piattaforma3.pubblicaContenuto(professionista3, "La scrittura creativa per la TV");
// Verifica del funzionamento della logica di collegamento
console.log(programma1.elencoPartecipanti);
console.log(programma2.elencoPartecipanti);
console.log(programma3.elencoPartecipanti);
