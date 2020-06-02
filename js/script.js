//Una funzione per capire se la parola è palindroma
//palindroma è una parola che è scritta uguale al suo contrario
//scrivo un parola, la spezzetto in un array la leggo in modo crescente e
// e in modo decrescente se conicidono la parola è palindroma




function parolaPalindroma(parola){
  //Creo un Array della parola
  var parolaArray = parola.split("");
  // console.log(parolaArray);
  //Creo un Array inverso della parola
  var parolaArrayContraria = [];

  for (var i = parolaArray.length - 1; i >= 0; i--) {
    parolaArrayContraria += parolaArray[i];
  }
  //Se la parolaArray  è uguale alla parolaArrayContraria è palindroma
  if (parola == parolaArrayContraria) {
    console.log(parola + ' è palindroma!');
  //altrimenti se è diversa non lo è
  }else if (parola != parolaArrayContraria){
    console.log(parola + ' non è palindroma!');
  }
}

parolaPalindroma('merce');
