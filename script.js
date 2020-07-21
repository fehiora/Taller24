let peso = prompt("Ingresa tu peso: ");
let altura = prompt("Ingreas tu altura en metros, separando los centímetros con un punto: ");

function IMC (peso, altura){
    let resultado = peso/(altura^2);

     document.write("Tu índice de masa corporal es: " + resultado);
}

IMC(peso,altura);