//Snack3

function eseguiOperazione(num1, num2, operazione){

    return operazione(num1, num2)

}

const divisione = (num1,num2) => (num1 / num2)
const sottrazione = (num1, num2) => (num1 - num2);

console.log(eseguiOperazione(5, 6, divisione));
console.log(eseguiOperazione(5, 6, sottrazione));
