// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//1) genero numero random da 1 a 6:

const numberUser = Math.ceil( Math.random() * 6);
const numberComputer = Math.ceil( Math.random() * 6);

console.log(numberComputer, numberUser)
if (numberUser > numberComputer){
    console.log("Human Supremacy!")
}else if (numberComputer > numberUser){
    console.log("Power to the robots!")
}else{
    alert("Deadlock!")
}