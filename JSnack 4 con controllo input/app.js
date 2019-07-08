/* JSnack #4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

var lista = [
  "Edoardo",
  "Giuseppe",
  "Maria",
  "Giacomo",
  "Giovanni",
  "Marco"
]

var mioNome; 

mioNome = prompt("Inserisci il tuo nome");
console.log(mioNome);

var eValido = false;
while (eValido === false) {
  if (mioNome == "" || parseInt(mioNome) || mioNome === "0") {
    alert("Inserisci un nome!");
    mioNome = prompt("Inserisci il tuo nome");
  } else {
    eValido = true;
  }
}
console.log("il mio nome è " + mioNome);

var eInvitato = false;
for (var i = 0; i < lista.length; i++) {
  if (lista[i].toLowerCase() === mioNome.toLowerCase()) {
    eInvitato = true;
  }
}


if (eInvitato) {
  console.log("sei invitato!");
} else {
  console.log("non sei invitato!");
}