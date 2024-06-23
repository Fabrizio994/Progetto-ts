interface IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: string;
  esperienza: number;
  interessi: string[];

  partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  ambitoDiSpecializzazione: string;
  durata: number;
  elencoPartecipanti: IProfessionistaMedia[];

  aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
  nome: string;
  tipo: string;
  descrizione: string;
  categoriaDiContenuto: string[];

  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void;
}

class ProfessionistaMedia implements IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: string;
  esperienza: number;
  interessi: string[];

  constructor(
    nome: string,
    cognome: string,
    specializzazione: string,
    esperienza: number,
    interessi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.specializzazione = specializzazione;
    this.esperienza = esperienza;
    this.interessi = interessi;
  }
  partecipaProgramma(programma: IProgrammaFormazione): void {
    programma.aggiungiPartecipante(this);
  }
}

class ProgrammaFormazione implements IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  ambitoDiSpecializzazione: string;
  durata: number;
  elencoPartecipanti: IProfessionistaMedia[];

  constructor(
    titolo: string,
    descrizione: string,
    ambitoDiSpecializzazione: string,
    durata: number
  ) {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.ambitoDiSpecializzazione = ambitoDiSpecializzazione;
    this.durata = durata;
    this.elencoPartecipanti = []; // Inizializzazione dell'array
  }
  aggiungiPartecipante(professionista: IProfessionistaMedia): void {
    this.elencoPartecipanti.push(professionista);
  }
}

class Piattaforma implements IPiattaforma {
  nome: string;
  tipo: string;
  descrizione: string;
  categoriaDiContenuto: string[];
  constructor(
    nome: string,
    tipo: string,
    descrizione: string,
    categorieContenuto: string[]
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.descrizione = descrizione;
    this.categoriaDiContenuto = categorieContenuto;
  }
  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void {
    console.log(
      `Pubblicando contenuto da ${professionista.nome} ${professionista.cognome}: ${contenuto}`
    );
  }
}

// Istanziazione di oggetti ProfessionistaMedia
const professionista1 = new ProfessionistaMedia(
  "Martina",
  "Ruggeri",
  "Fotografia",
  7,
  ["arte visiva", "ritratti"]
);
const professionista2 = new ProfessionistaMedia(
  "Elena",
  "Ferrari",
  "Montaggio",
  10,
  ["film", "video musicali"]
);
const professionista3 = new ProfessionistaMedia(
  "Chiara",
  "Marchetti",
  "Sceneggiatura",
  4,
  ["televisione", "teatro"]
);

// Istanziazione di oggetti ProgrammaFormazione
const programma1 = new ProgrammaFormazione(
  "Creatività Digitale",
  "Corso per sviluppare competenze digitali avanzate",
  "Fotografia",
  25
);
const programma2 = new ProgrammaFormazione(
  "Tecniche di Montaggio",
  "Corso avanzato di montaggio video",
  "Montaggio",
  50
);
const programma3 = new ProgrammaFormazione(
  "Scrittura Creativa",
  "Laboratorio di sceneggiatura per il teatro e la TV",
  "Sceneggiatura",
  35
);

// Le professioniste partecipano ai programmi di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);
professionista3.partecipaProgramma(programma3);

// Istanziazione di oggetti Piattaforma
const piattaforma1 = new Piattaforma(
  "Artisti Digitali",
  "sito web",
  "Piattaforma per promuovere l’arte digitale",
  ["fotografia", "grafica", "design"]
);
const piattaforma2 = new Piattaforma(
  "Visione Creativa",
  "canale YouTube",
  "Canale per video creativi",
  ["film", "video musicali"]
);
const piattaforma3 = new Piattaforma(
  "Storie in Scena",
  "blog",
  "Blog dedicato alla sceneggiatura",
  ["televisione", "teatro"]
);

// Pubblicazione dei contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(
  professionista1,
  "Una galleria di ritratti d'autore"
);
piattaforma1.pubblicaContenuto(
  professionista2,
  "Un video musicale sperimentale"
);
piattaforma2.pubblicaContenuto(
  professionista3,
  "Un cortometraggio di teatro moderno"
);
piattaforma3.pubblicaContenuto(
  professionista1,
  "Esplorazione della fotografia contemporanea"
);
piattaforma3.pubblicaContenuto(
  professionista2,
  "Tecniche avanzate di montaggio video"
);
piattaforma3.pubblicaContenuto(
  professionista3,
  "La scrittura creativa per la TV"
);

// Verifica del funzionamento della logica di collegamento
console.log(programma1.elencoPartecipanti);
console.log(programma2.elencoPartecipanti);
console.log(programma3.elencoPartecipanti);
