// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti 
// stampare la più lunga delle due.

const parola1 = prompt("Inserisci una parola");
const parola2 = prompt("Inserisci un'altra parola");

if(parola1.length > parola2.length)console.log(parola1);
else if(parola1.length < parola2.length)console.log(parola2);
else console.log(parola1 + ' ' + parola2);