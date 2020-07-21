// let peso = prompt("Ingresa tu peso: ");
// let altura = prompt("Ingreas tu altura en metros, separando los centímetros con un punto: ");

function IMC (){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = peso/(altura^2);
 
    if (resultado <=15){
        document.write("Su IMC es: " + resultado + " Se encuentra en delgadez muy severa");
    }else if (resultado >15 && resultado <= 15.9){
        document.write("Su IMC es: " + resultado + " Se encuentra en delgadez severa");
    }else if (resultado >=16 && resultado <= 18.4){
        document.write("Su IMC es: " + resultado + " Se encuentra delgad@");
    }else if (resultado >=18.5 && resultado <= 24.9){
        document.write("Su IMC es: " + resultado + " Su peso es saludable");
    }else if (resultado >=25 && resultado <= 29.9){
        document.write("Su IMC es: " + resultado + " Se encuentra en sobrepeso");
    }else if (resultado >=30 && resultado <= 34.9){
        document.write("Su IMC es: " + resultado + " Se encuentra en obesidad severa");
    }else if (resultado >= 40){
        document.write("Su IMC es: " + resultado + " Se encuentra en obesidad mórbida");
    }

}

/*function calcular(){
    
    let rsp = document.getElementById("respuesta");
    rsp.textContent = IMC(peso, altura);
}*/