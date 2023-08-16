// Escribe un condicional que dados dos números indique cuál es el mayor.

let numero1 = 10;
let numero2 = 10;

if(numero1<numero2){
    console.log("El numero Mayor es: " + numero2);
  }
  
  else if(numero1 === numero2){
    console.log("los numeros son iguales");
  }
  
  else{
    console.log("el numero Mayor es: " + numero1);
  }
//-------------------------------------------------------------------------------------------------------
// Escribe un condicional que dado un nombre determine si su longitud es mayor a 5 o no

let nombre1 = "alejan"

if(nombre1.length>5){
    console.log("su longitud es mayor a 5: " + nombre1);  
}
else{
    console.log("su longitud es menor");
}

//--------------------------------------------------------------------------------------------------------
// Escribe un condicional que determina si una frase tiene la subcadena “si”.

let frase = "Esta es una frase de ejemplo que contiene la subcadena si.";

if (frase.includes("si")) {
    console.log("La frase SI contiene la subcadena 'si'");
} else {
    console.log("La frase NO contiene la subcadena 'si'");
}
//------------------------------------------------------------------------------------------------------
// Ejemplo de horarios

let hora = 15;

if(hora >= 6 && hora <= 12){
    console.log("Buenos Dias");
} else if (hora > 12 && hora < 18)
{
    console.log("Buenas tardes");
} else{
    console.log("Buenas noches");
}


