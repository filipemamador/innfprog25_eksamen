//Array eller Liste for Stillingene
const stillinger = [
    "Rektor",
    "Professor",
    "Dekan",
    "Vaktmester",
    "Lektor",
]

//Array eller Liste for kursene
const kursListe = [
    "Webutvikling",
    "Programmering 1",
    "Algoritmer og datastrukturer",
    "Kunstig intelligens",
    "Maskinlæring",
    "Databaser",
    "Operativsystemer",
    "Webdesign",
    "Responsiv utvikling",
    "Grunnleggende JavaScript",
    "UX-design",
    "Frontend-utvikling",
    "CSS og design",
    "Python for web",
    "Systemutvikling",
    "Objektorientert programmering",
    "Datakommunikasjon",
    "Datasikkerhet",
    "Prosjektledelse",
]

//Array eller Liste for alle ansatte 
const ansatte = [{
// 1 Rektor
fornavn: "Kari",
etternavn: "Hansen",
kontor: "A101",
stilling: 0,
epost: "kari.rektor@hiof.no",
kursansvar: []
},

// 2 Dekaner
{
fornavn: "Ola",
etternavn: "Haaland",
kontor: "B202",
stilling: 2,
epost: "ola.dekan@hiof.no",
kursansvar: []
},
{
fornavn: "Ingrid",
etternavn: "Solberg",
kontor: "B204",
stilling: 2,
epost: "ingrid.dekan@hiof.no",
kursansvar: []
},


// 3 Vaktmestere
{
fornavn: "Hans",
etternavn: "Løkken",
kontor: "V001",
stilling: 3,
epost: "hans.vk@hiof.no",
kursansvar: []
},
{
fornavn: "Tone",
etternavn: "Aamodt",
kontor: "V002",
stilling: 3,
epost: "tone.vk@hiof.no",
kursansvar: []
},
{
fornavn: "Erik",
etternavn: "Haugstad",
kontor: "V003",
stilling: 3,
epost: "erik.vk@hiof.no",
kursansvar: []
},
// 5 Professorer (alle med minst 1 kurs, noen med 2 eller 3)
{
fornavn: "Siri",
etternavn: "Eikeland",
kontor: "C301",
stilling: 1,
epost: "siri.pf@hiof.no",
kursansvar: ["Algoritmer og datastrukturer", "Maskinlæring"]
},
{
fornavn: "Morten",
etternavn: "Stormo",
kontor: "C302",
stilling: 1,
epost: "morten.pf@hiof.no",
kursansvar: ["Kunstig intelligens"]
},
{
fornavn: "Line",
etternavn: "Bratlie",
kontor: "C303",
stilling: 1,
epost: "line.pf@hiof.no",
kursansvar: ["Systemutvikling", "Objektorientert programmering"]
},
{
fornavn: "Johan",
etternavn: "Skarseth",
kontor: "C304",
stilling: 1,
epost: "johan.pf@hiof.no",
kursansvar: ["Datasikkerhet"]
},
{
fornavn: "Ella",
etternavn: "Program",
kontor: "C305",
stilling: 1,
epost: "ella.pf@hiof.no",
kursansvar: ["Databaser", "Operativsystemer", "Datakommunikasjon"]
},
// 10 Lektorer (alle har minst 1 kurs, noen 2)
{
fornavn: "Trine",
etternavn: "Vollen",
kontor: "D401",
stilling: 4,
epost: "trine.lek@hiof.no",
kursansvar: ["Webdesign", "Responsiv utvikling"]
},
{
fornavn: "Per",
etternavn: "Røstad",
kontor: "D402",
stilling: 4,
epost: "per.lek@hiof.no",
kursansvar: ["Frontend-utvikling"]
},
{
fornavn: "Sofie",
etternavn: "Skjelstad",
kontor: "D403",
stilling: 4,
epost: "sofie.lek@hiof.no",
kursansvar: ["UX-design", "Webdesign"]
},
{
fornavn: "Lars",
etternavn: "Fjellheim",
kontor: "D404",
stilling: 4,
epost: "lars.lek@hiof.no",
kursansvar: ["Grunnleggende JavaScript"]
},
{
fornavn: "Hanne",
etternavn: "Rudberg",
kontor: "D405",
stilling: 4,
epost: "hanne.lek@hiof.no",
kursansvar: ["Webutvikling", "CSS og design"]
},
{
fornavn: "Thomas",
etternavn: "Kvalø",
kontor: "D406",
stilling: 4,
epost: "thomas.lek@hiof.no",
kursansvar: ["Python for web"]
},
{
fornavn: "Maria",
etternavn: "Bjørnsen",
kontor: "D407",
stilling: 4,
epost: "maria.lek@hiof.no",
kursansvar: ["Prosjektledelse", "Systemutvikling"]
},
{
fornavn: "Eirik",
etternavn: "Torgersen",
kontor: "D408",
stilling: 4,
epost: "eirik.lek@hiof.no",
kursansvar: ["Datasikkerhet"]
},
{
fornavn: "Nina",
etternavn: "Øverland",
kontor: "D409",
stilling: 4,
epost: "nina.lek@hiof.no",
kursansvar: ["Operativsystemer"]
},
{
fornavn: "Jon",
etternavn: "Hågensen",
kontor: "D410",
stilling: 4,
epost: "jon.lek@hiof.no",
kursansvar: ["Objektorientert programmering", "Programmering 1"]
}
];


    
