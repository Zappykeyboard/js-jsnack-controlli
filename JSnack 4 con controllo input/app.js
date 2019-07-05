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
var eValido = false;
mioNome = prompt("Inserisci il tuo nome");
console.log(mioNome);

while (eValido === false) {
  if (mioNome == "") {
    alert("Inserisci un nome!");
    mioNome = prompt("Inserisci il tuo nome");
  } else {
    eValido = true;
  }
}
console.log(mioNome);

var eInvitato = false;

for (var i = 0; i < lista.length; i++) {
  if (lista[i].toLowerCase() === mioNome.toLowerCase()) {
    eInvitato = true;
  }
}

console.log(eInvitato);

if (eInvitato) {
  console.log("sei invitato!");
} else {
  console.log("non sei invitato!");
}