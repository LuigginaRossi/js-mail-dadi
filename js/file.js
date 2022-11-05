// DMail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


emailUsers=["lucapace@gmail.com", "marcobianchi@hotmail.it", "giadaverdi@yahoo.com"]

const emailUser = prompt( "Inserisci la tua email" );

for ( let i= 0; i < emailUsers.length; i++ ) {
    //ad ogni ciclo controllo se il valore che corrisponde alla posizione i
    //è uguale o meno a "pasta":
    if (emailUsers[ i ] === emailUser){

        console.log("Benvenuto!");
    }else{
        console.log("Non puoi accedere con questa email!")
    }
}



