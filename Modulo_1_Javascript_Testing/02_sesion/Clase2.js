//Repaso
//Aritmeticos
//+, -, *, /, %, **


//Comparación 
// ==, ===, !=, !==, <, >, >=, <=

//Logicos
//&&, ||, !

// var edad = 18;

// //variables constantes 
// let edad1 = 50;
// const edad2 = 20;

// if(edad<18){
//     console.log("Eres menor de edad");
//     let dato = "si soy menor de edad";
//     var dato2 = "claro que soy menor de edad";
//     console.log(dato);
// }else if(edad>= 18 && edad <65){
//     console.log("Eres un adulto");
// }else{
//     console.log("Eres un adulto mayor");
// }


// console.log(edad);
// console.log(dato2);
// console.log(dato);

// let numero = prompt("Ingresa un numero");
// var letra = (/[a-zA-Z]/).test(numero)
//     console.log(letra);
// if(numero>0 && letra == false){
//     console.log("El número es positivo");
// }else if(numero<0 && letra == false){
//     console.log("El número es negativo");
// }else if(letra == true){
//     console.log("Es una letra");
// }
// else{
//     console.log("El número es 0")
// }


// for(let i=1; i<=5;i++){
//     console.log(`integración número ${i}`);
// }

// let contador = 1;
// while (contador <=15){
//     console.log(`Contador en ${contador}`);
//     contador ++;
// }


// let num = prompt("Ingresa un número");
// num = Number(num);
// if(num % 2  === 0 ){
//     console.log("El número es par");
// }else{
//     console.log("El número es impar")
// }


// let suma = 0;
// for(let i = 1; i<= 100; i++){
//     suma += i;
// }

// console.log("La suma del 1 al 100 es: " + suma);


//*************************************
//Actividad
//*************************************


let intentos = 0;
let claveCorrecta = "229940";
let claveIngresada;
var letra;

while(intentos < 5){
    claveIngresada = prompt("Ingresa la contraseña");
    letra = (/[a-zA-Z]/).test(claveIngresada);
    

    console.log(`Es letra: ${letra}`);
    if(claveIngresada === claveCorrecta && letra === false){
        console.log("Acceso concedido.");
        break;
    }else if(letra === true){
        console.log("La contraseña no puede incluir letras");        
    }else{
        console.log("Contraseña incorrecta");
    }
    intentos ++;
}

if(intentos === 5){
    console.log("Has agotado tus intentos, intenta más tarde");
}