// Snack4

function creaTimer(tempo){
    return function (){
        setTimeout(()=>{
            console.log("Tempo scaduto!");
          }, tempo)
    }
}

const timer2s = creaTimer(2000);

timer2s();