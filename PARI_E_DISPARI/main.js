

/*L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// function num(number){
  
//   if(number % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// }

// //console.log(num(12))

// let richiesta = +prompt("inserisci numero")

// if(num(richiesta)){
//   console.log("pari")
// }else{
//   console.log("dispari")
// }


//chiedere di scegliere pari o dispari
let pariVersusDispari = prompt("scegli pari o dispari")
console.log(pariVersusDispari)

let pari = "pari"

if(pariVersusDispari != pari){
  console.log (prompt("hai sbagliato riprova 😕"))
}

//chiedere il numero
let richiesta = prompt(" da 1 a 5")
console.log(richiesta)

if(richiesta <= 5){
  console.log("ok")
}else{
  richiesta = prompt("hai sbagliato 🤟 riprova inserendo un numero da uno a cinque")
  console.log(richiesta)
}



if(richiesta % 2 === 0){
  console.log("pari")
}else{
  console.log("dispari")
}






function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


let computer = getRndInteger (1, 5)
console.log(computer)


function pari_dispari(num1, num2){
 let somma = num1 + num2;
  console.log(somma)
 if (somma % 2 === 0){
  return true
 }else {
  return false
 }
  
}

let sommapari = pari_dispari(+richiesta, +computer)
console.log(sommapari)

if(richiesta > computer){
  console.log("hai vinto")
}else if(richiesta < computer){
  console.log("hai perso")
  
}else{
  richiesta == computer
  console.log("è pari")
}

