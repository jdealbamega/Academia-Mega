
//Función declarativa
// saludar("Jessica Funct. Declarativa");

// function saludar(nombre){
//     console.log(`Hola ${nombre}`);
// }

// saludar("Jessica Funct. Declarativa"");



// //Función anonima
// let saludar1 = function saludar(nombre){
//     console.log(`Hola ${nombre}`);
// }

// saludar1("Jessica Funct. Anonima");



// //Función con flecha
// let saludar2 = (nombre) => console.log(`Hola ${nombre}`)
// saludar2("Jessica Funct. con Flecha");

// function sumar(a,b){
//     return a+b;
// }
// console.log(sumar(5000, 453));


// const restar = function(a,b){
//     return a-b;
// }
// console.log(restar(10,4))


// const multiplicar =(a,b) => a *b;
// console.log(multiplicar(4,2))


// const sumar = (a,b) =>{
//     let resultado = a+b;
//     return resultado;
// }
// console.log(sumar(3,7))


// let mensajeGlobal = "Hola desde afuera";
// let mensajeLocal;

// function ejemploScope(){
//     mensajeLocal = "Hola desde dentro"
//     console.log(mensajeGlobal);
//     console.log(mensajeLocal);
// }

// ejemploScope();
// console.log(mensajeGlobal);
// console.log(mensajeLocal);


//Closure

function contador(){
    let cuenta =0;
    return function(){
        cuenta ++;
        return cuenta;
    };
}

const incrementar = contador();
console.log(incrementar());//1
console.log(incrementar());//2
console.log(incrementar());//3


//Actividad
//Crea una función que devuelva otra función que multiplica

function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}

const doble = multiplicador(2);
const cuadruplicar = multiplicador(4);
const octuple = multiplicador(8);

console.log(doble(10));
console.log(cuadruplicar(10));
console.log(octuple(10));