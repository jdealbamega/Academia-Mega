function expert(actual){
    return {
        toBe(expected){
            if(actual === expected){
                console.log(`Pasó ${actual} === ${expected}`);
            }
            else{
                console.log(`Falló: se esperaba ${actual}, pero se obtuvo ${expected}`);
            }
        },
        toEqual(expected){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log(`Pasó Objetos Iguales`);
            }
            else{
                console.log(`Falló: Objetos diferentes`);
            }
        }
    }        
}

function sumar (a,b){
    return a+b;
}

expert(sumar(2,3).toBe(5));
expert(sumar(10,0).toBe(10))