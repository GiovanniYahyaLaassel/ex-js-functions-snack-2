// Snack6

function creaContatoreAutomatico(intervallo) {
    let count = 0;  

    return function (){
        setInterval(() => {
            count++;
            console.log(count)
        }, intervallo);
    }
};

const startContatore = creaContatoreAutomatico(2000);

startContatore();