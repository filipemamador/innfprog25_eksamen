

// 1. Returnerer HTML-kort for en ansatt basert på index
function getAnsattHTML(index) {
const a = ansatte[index];
if (!a) return "<p>Ansatt ikke funnet</p>";


return `
<div class="ansatt-kort">
<h2>${a.fornavn} ${a.etternavn}</h2>
<p><strong>Stilling:</strong> ${stillinger[a.stillinger]}</p>
<p><strong>Kontor:</strong> ${a.kontor}</p>
<p><strong>E-post:</strong> ${a.epost}</p>
${a.kursansvar.length > 0 ? `<p><strong>Kursansvar:</strong> ${a.kursansvar.join(", ")}</p>` : ""}
</div>
`;
}




// 2. Returnerer HTML for alle ansatte ved å bruke funksjon 1
function listAlleAnsatte() {
return ansatte.map((_, i) => getAnsattHTML(i)).join("\n");
}


// 3. Filtrerer ansatte basert på stilling
function filtrerStilling (stillingsIndex) {
return ansatte.filter(a => a.stillinger === stillingsIndex);
}


// 4. Returnerer alle kurs
function hentAlleKurs() {
return kursListe;
}


// 5. Filtrerer alle undervisere (professorer og lektorer)
function hentAlleUndervisere() {
return ansatte.filter(a => a.stillinger === 1 || a.stillinger === 4);
}


// 6. Filtrerer alle i administrasjon (ingen kursansvar)
function hentAdministrasjon() {
return ansatte.filter(a => !a.kursansvar || a.kursansvar.length === 0);
}


// 7. Legger til en underviser i registeret
function leggTilUnderviser(fornavn, etternavn, kontor, epost, kursansvar, stillingIndex) {
ansatte.push({
fornavn,
etternavn,
kontor,
epost,
stillinger: stillingIndex,
kursansvar
});
return true;
}


// 8. Sletter en ansatt basert på index
function slettAnsatt(index) {
if (index < 0 || index >= ansatte.length) return false;
ansatte.splice(index, 1);
return true;
}
