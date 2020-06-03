//Una funzione per capire se la parola è palindroma
//palindroma è una parola che è scritta uguale al suo contrario
//scrivo un parola, la spezzetto in un array la leggo in modo crescente e
// e in modo decrescente se conicidono la parola è palindroma

// parolaPalindroma('merce');
//
// function parolaPalindroma(parola){
//   //Creo un Array della parola
//   var parolaArray = parola.split("");
//   // console.log(parolaArray);
//   //Creo un Array inverso della parola
//   var parolaArrayContraria = [];
//
//   for (var i = parolaArray.length - 1; i >= 0; i--) {
//     parolaArrayContraria += parolaArray[i];
//   }
//   //Se la parolaArray  è uguale alla parolaArrayContraria è palindroma
//   if (parola == parolaArrayContraria) {
//     console.log(parola + ' è palindroma!');
//   //altrimenti se è diversa non lo è
//   }else if (parola != parolaArrayContraria){
//     console.log(parola + ' non è palindroma!');
//   }
// }

//L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.




//L'utente sceglie pari o dispari
var scelta = prompt('Pari o dispari');
console.log(scelta);
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);
var numeroComputer =  Math.floor(Math.random() * 5) + 1;

console.log(numeroComputer);
var somma = numeroUtente + numeroComputer;
console.log(somma);
var sommaPariODispari = sePariODispari(somma);
var messaggio;
if (sommaPariODispari === scelta ) {
 messaggio = "hai vinto";
 console.log(sommaPariODispari);

}else {
  messaggio = "hai perso";
}
console.log(messaggio);


function sePariODispari(numero) {
  var risultato;
  if (numero % 2 == 0) {
    return risultato = 'pari';

  }else if (numero % 2 != 0) {
    return risultato = 'dispari';
  }
 console.log(numero);
}
