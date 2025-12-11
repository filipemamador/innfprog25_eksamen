// 1) Funksjon som tar imot en index og returnerer HTML-kort med info om en ansatt
//#OPPD3 Endret e-post tagget til en a href for at den skulle se ut som en link. Lagt til også en knapp som kun vises hvis admin=true, det vil si at den kun vises i admin.html filen for å gjøre det mulig å slette en ansatt

function lagAnsattKort(index, admin = false) {
    const ansatt = ansatte[index];
    if (!ansatt) return "<p>Ansatt ikke funnet</p>";

    let html = `
        <article class="ansatt-kort">
            <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
            <p><strong>Stilling:</strong> ${stillinger[ansatt.stilling]}</p>
            <p><strong>Kontor:</strong> ${ansatt.kontor}</p>
            <p><strong>E-post:</strong> <a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p> 
            <p><strong>Kursansvar:</strong> ${ansatt.kursansvar.length > 0 ? ansatt.kursansvar.join(", ") : "Ingen"}</p>
        
    `;
    if (admin) {
        html += `
                <button onclick ="slettUpdate(${index})" class= "delete"> Slett Ansatt </button>` ;
    }
    html += `</article>`;
    return html;
}

//#OPPD3
//Lagd ny funksjon for å slette ansatt og vise alle ansatte på nytt i admin.html filen
function slettUpdate(index){
    slettAnsatt(index);
    listeAlleAnsatte(ansatte, true);
}



// 2) Funksjon som lister ut ALLE ansatte og bruker funksjon 1 (Denne funksjon brukt jeg i oppgave 1)
/*function listeAlleAnsatte() {
    let html = "";
    ansatte.forEach((_, index) => {
        html += lagAnsattKort(index);
    });
    return html; }*/

//#OPPD3
//  2) Ny funksjon som lister ut alle ansatte og bruker funksjon 1
// lagt til parameteren admin for at slett ansatt knappen kun vises i admin.html filen
function listeAlleAnsatte(ansatteListe, admin = false) {
    let html = "";

    ansatteListe.forEach(a => {
        const index = ansatte.indexOf(a);
        html += lagAnsattKort(index, admin);
    });

    document.getElementById("ansatte").innerHTML = html;}




// 3) Funksjon som filtrerer ansatte etter stilling (Denne funksjonen brukt jeg i oppgave 1)
// stilling: tall som matcher indeksen i stillinger-arrayen
// hvis stilling === "alle", returner alle ansatte
/*function filtrerAnsatteStilling(stilling) {
    if (stilling === "alle") {
        return ansatte;
    }  

    // stilling er tall (0–4)
    return ansatte.filter(a => a.stilling === stilling); }*/

//#OPPD3 3)
//  Funksjon som filtrerer ansatte etter stilling ved bruk av indexen
function visEtterStilling(stillingsIndex) {
    const filtrert = ansatte.filter(a => a.stilling === stillingsIndex);
    listeAlleAnsatte(filtrert);
}


/*// 4) Funksjon som returnerer HTML-liste over alle kurs
function hentAlleKurs() {
    let html = "<ul>";
    kursListe.forEach(kurs => {
        html += `<li>${kurs}</li>`;
    });
    html += "</ul>";
    return html; }*/

// #OPPD3
//  4) Funksjon som returnerer HTML-liste over alle kurs
function hentAlleKurs() {
    let html = "<ul>";
    kursListe.forEach(kurs => {
        html += `<li>${kurs}</li>`;
    });
    html += "</ul>";
    document.getElementById("kursoversikt").innerHTML = html;
}


// 5) Filtrer alle undervisere (professorer og lektorer)
// eller: alle ansatte som har minst 1 kursansvar
/*function filtrerUndervisere() {
    return ansatte.filter(a => a.kursansvar.length > 0);}*/

//#OPPD3
// 5) Filtrer alle unervisere (Kun professorer og lektorer)

function filtrerUndervisere() {
    const filtrert = ansatte.filter(a => a.kursansvar.length > 0);
    listeAlleAnsatte(filtrert);}


// 6) Filtrer administrasjon (ingen kursansvar)     
/*function filtrerAdministrasjon() {
    return ansatte.filter(a => a.kursansvar.length === 0);}*/

// #OPPD3
// 6) Filtrer administrasjon (ingen kursansvar)

function filtrerAdministrasjon() {
    const filtrert = ansatte.filter(a => a.kursansvar.length === 0);
    listeAlleAnsatte(filtrert);
}


// 7) Legg til ny underviser i registeret
// fornavn, etternavn, kontor, stilling, epost, kursansvar (array)
function leggTilUnderviser(fornavn, etternavn, kontor, stilling, epost, kursansvar) {
    ansatte.push({
        fornavn,
        etternavn,
        kontor,
        stilling,
        epost,
        kursansvar
    });
} 
//#OPPD3
//Koble til Ny-Ansatt skjemaet i admin.html filen, eventListener for å sende inn skjemaet
document.getElementById("Ny-Ansatt").addEventListener("submit", function(p) {

p.preventDefault(); //.preventDefault() stopper at skjemaet refresher
const fornavn = document.getElementById("fornavn").value;
const etternavn = document.getElementById("etternavn").value; //henter data brukeren skrive inn i input feltene med .value
const kontor = document.getElementById("kontor").value;
const epost = document.getElementById("epost").value;
const stilling = parseInt(document.getElementById("stilling").value); //parseInt endrer string til tall
const kursansvar = document.getElementById("kursansvar").value
        .split(",") //  endrer vanlig tekst til en array
        .map(p2=>p2.trim()) // fjerner mellomrom i starten og slutten
        .filter(p3=>p3.length > 0); // fjerner tomme elementer som brukeren sender inn
leggTilUnderviser(fornavn, etternavn, kontor, stilling, epost, kursansvar); // .push i ansatteListe arrayen

listeAlleAnsatte(ansatte, true); // skriver ut alle ansatte kortene på nytt med true siden det er i admin filen og jeg skal fortsatt klare å slette ansatte.

this.reset(); //this refererer til Ny-Ansatt skjemaet og .reset nullstiller alle input felter, for å gjøre lettere for å legge til en ny ansatt.    
});


// 8) Slett ansatt etter index
function slettAnsatt(index) {
    if (index >= 0 && index < ansatte.length) {
        ansatte.splice(index, 1);
        return true;
    }
    return false;
}


