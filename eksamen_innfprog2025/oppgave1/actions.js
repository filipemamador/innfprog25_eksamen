// 1) Funksjon som tar imot en index og returnerer HTML-kort med info om en ansatt
//#OPPD3 Endret e-post tagget til en a href for at den skulle se ut som en link
function lagAnsattKort(index) {
    const ansatt = ansatte[index];
    if (!ansatt) return "<p>Ansatt ikke funnet</p>";

    return `
        <div class="ansatt-kort">
            <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
            <p><strong>Stilling:</strong> ${stillinger[ansatt.stilling]}</p>
            <p><strong>Kontor:</strong> ${ansatt.kontor}</p>
            <p><strong>E-post:</strong> <a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p> 
            <p><strong>Kursansvar:</strong> ${ansatt.kursansvar.length > 0 ? ansatt.kursansvar.join(", ") : "Ingen"}</p>
        </div>
    `;
}


// 2) Funksjon som lister ut ALLE ansatte og bruker funksjon 1 (Denne funksjon brukt jeg i oppgave 1)
/*function listeAlleAnsatte() {
    let html = "";
    ansatte.forEach((_, index) => {
        html += lagAnsattKort(index);
    });
    return html;

}*/

//#OPPD3
//  2) Ny funksjon som lister ut alle ansatte og bruker funksjon 1
function listeAlleAnsatte(ansatteListe) {
    let html = "";

    ansatteListe.forEach(a => {
        const index = ansatte.indexOf(a);
        html += lagAnsattKort(index);
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
    return ansatte.filter(a => a.stilling === stilling);
}*/

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
    return html;
}*/

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
    return ansatte.filter(a => a.kursansvar.length > 0);
}*/

//#OPPD3
// 5) Filtrer alle unervisere (Kun professorer og lektorer)

function filtrerUndervisere() {
    const filtrert = ansatte.filter(a => a.kursansvar.length > 0);
    listeAlleAnsatte(filtrert);}


// 6) Filtrer administrasjon (ingen kursansvar)
/*function filtrerAdministrasjon() {
    return ansatte.filter(a => a.kursansvar.length === 0);
}*/
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


// 8) Slett ansatt etter index
function slettAnsatt(index) {
    if (index >= 0 && index < ansatte.length) {
        ansatte.splice(index, 1);
        return true;
    }
    return false;
}
