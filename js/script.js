/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

// creare un alert che genera 5 numeri casuali

function random(min, max) {
  return Math.floor(Math.random()* (max - min + 1) + min);
};

var numeri = [];

while (numeri.length < 5) {
  var randomNumber = random(1, 100);
  if (numeri.indexOf(randomNumber) < 0) {
    numeri.push(randomNumber);
  }
}

for (var i = 0; i < numeri.length; i++) {
    var serie = numeri[i];
    alert(serie);
}


// All'ok deve partire un timer di 30 secondi
