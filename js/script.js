/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// creare un alert che genera 5 numeri casuali

function random(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};

var numeri = [];

// i numeri random devono essere sempre diversi
while (numeri.length < 5) {
  var randomNumber = random(1, 100);
  if (numeri.indexOf(randomNumber) < 0) {
    numeri.push(randomNumber);
  }
}

var serie = alert(numeri);

// All'ok deve partire un timer di 30 secondi

var userNumbers = []
setTimeout(function() {
  while (userNumbers.length < 5) {
   var numeroUtente = parseInt(prompt('Inserisci un numero'));
    if (userNumbers.includes(numeroUtente)) {
      alert('Non puoi inserire lo stesso numero');
    } else {
      userNumbers.push(numeroUtente);
    }
  }


   var numeriCorretti = [];
  for (var i = 0; i < userNumbers.length; i++) {
    if (numeri.includes(userNumbers[i])) {
      numeriCorretti.push(userNumbers[i]);
    }
  }

  console.log('hai inserito ' + numeriCorretti.length +  ' numeri corretti!');
  console.log('I numeri che hai ricordato: ' + numeriCorretti);
}, 30000);







// var userNumbers = []
// while (numeri.length < 5) {
//  var numeroUtente = parseInt(prompt('Inserisci un numero'));
//   if (userNumbers.includes(numeroUtente)) {
//     alert('Non puoi inserire lo stesso numero');
//   } else {
//     userNumbers.push(randomNumber);
//   }
// }
// console.log(userNumbers);
