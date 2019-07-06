//Crea un array vuoto. chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array

var array = [];
var num;

for (var i = 0; i < 5; i++) {
  num = parseInt(prompt("inserisci un numero"));

  while(isNaN(num)){
    alert("inserisci un numero!");
    num = parseInt(prompt("inserisci un numero"));
  }
  if (num % 2 !== 0) {
    array.push(num);
  }


}

console.log(array);