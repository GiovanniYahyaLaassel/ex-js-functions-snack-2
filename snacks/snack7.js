// snack6
 function eseguiEferma(messaggio, tempoAvvio, tempoStop) {

    const id = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(id);
        console.log("Timer Stoppato");
    }, tempoStop);
}

eseguiEferma("Snack7 in corso...", 1000, 10000);