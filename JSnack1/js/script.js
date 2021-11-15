// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// Programma con FOR
let sommaFor = 0;

for(let i = 0; i < 5; i++){
    sommaFor += parseInt(prompt("Inserisci un numero"));
}
console.log(sommaFor);

// Programma con WHILE
let sommaWhile = 0;
let j=0;
while(j < 5){
    sommaWhile += parseInt(prompt("Inserisci un numero"));
    j++;
}
console.log(sommaWhile);