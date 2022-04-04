/*
Chiedere all'utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/




//inserisci una parola

/*
let parola = prompt("insrisci parola");
console.log(parola)

//divido le parole
let parolaDivisa = parola.split('');
console.log(parolaDivisa);

//invertire le parole
parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

//unisco le parole
parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}
  
*/




let parola = prompt("inserici una parola");

let parolaInversa = reverse(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }


  function reverse(str){
    let strInversa = str.split('').reverse().join('');  
    return strInversa;
  }




