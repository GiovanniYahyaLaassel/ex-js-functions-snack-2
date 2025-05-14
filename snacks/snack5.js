//Snack5 

function stampaOgniSecondo(messaggio) {
    
    return setInterval (() =>{
        console.log(messaggio)
    },1000)
}

const id = stampaOgniSecondo("Snack iniziato");

// Dopo 5 secondi fermo tutto 

setTimeout(()=> {
    clearInterval(id);
    console.log("Ferma lo snack");
}, 5000);