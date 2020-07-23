//Modelando objetos clase del 23/07/2020

var bankCount = {
            titular: "Alex",
            saldo : 0,

            ingresar : function (valor){
                this.saldo += valor;
                return "Has ingresado: " + valor;
            },
            extraer : function (valor){
                if(this.saldo < valor){
                    valor = this.saldo;
                    this.saldo = 0;
                }else{
                    this.saldo -= valor;
                }
                return "Has retirado: " + valor;
            },
            informar : function (){
                return "El titular de esta cuenta es: " + this.titular + " El saldo de esta cuenta es: " + this.saldo; 
            },   
}

console.log(bankCount.titular);
console.log(bankCount.saldo);
console.log("-------------");
console.log(bankCount.ingresar(80));
console.log(bankCount.extraer(20));
console.log(bankCount.informar());





//Aprendiendo variables y funciones clase del 21/07/2020
function IMC (){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let h2_respuesta = document.getElementById("respuesta");
    let resultado = peso/(altura^2);
 
    if (resultado <=15){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra en delgadez muy severa";
    }else if (resultado >15 && resultado <= 15.9){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra en delgadez severa";
    }else if (resultado >=16 && resultado <= 18.4){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra delgad@";
    }else if (resultado >=18.5 && resultado <= 24.9){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Su peso es saludable";
    }else if (resultado >=25 && resultado <= 29.9){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra en sobrepeso";
    }else if (resultado >=30 && resultado <= 34.9){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra en obesidad severa";
    }else if (resultado >= 40){
        h2_respuesta.textContent = "Su IMC es: " + resultado + " Se encuentra en obesidad mórbida";
    }

}


//Aprendiendo bucles clase del 22/07/2020

// Haciendo función par e impar con un for



function par(){

    let numero = document.getElementById("n").value;
    let parImpar = document.getElementById("parImpar");
    parImpar.textContent = '';

    for (var num=1; num<=numero ; num++ ){
        let operacion = num % 2;
        let item = document.createElement("li");
        if(operacion === 0){
            item.textContent = num + " Es número par";
        }else{
            item.textContent = num + " Es número impar";
        }
        parImpar.appendChild(item);
    }
}

 //Haciendo tablas de multiplicar con while

 

 function multiplicar (){

    let tabla = document.getElementById("multiplica").value;
    let resulTabla = document.getElementById("resulTabla");
    resulTabla.textContent = '';

    if(tabla >= 2 && tabla <=10){
        let multiplicador = 1;
        while(multiplicador <=10){
            let linea = document.createElement("h2");
            linea.textContent = tabla + " X " + multiplicador +" = " + tabla*multiplicador;
            resulTabla.appendChild(linea);
            multiplicador += 1;
        }
    }
 }
