//funcion sumArray, funcion que permite sumar todos los elementos de un array




//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array
// funcion groupArrayBy, funcion que permite agrupar los elementos de un array
//  por una propiedad


// solucion

//funcion sumArray, funcion que permite sumar todos los elementos de un array

export function sumArray(arr) { // recibe un arreglo de numeros
    return arr.reduce((acc, num) => acc + num, 0); // recorre el array y va sumando todo 
}


//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array

export function averageArray(arr) { // recibe un arreglo de numeros
    return arr.reduce((acc, num) => acc + num, 0) / arr.length; // suma todos los numeros y luego divide por la cantidad
}


//funcion groupArrayBy, funcion que permite agrupar los elementos de un array por una propiedad

export function groupArrayBy(arr, prop) { // arr es el array de objetos y prop es la propiedad como ejemplo edad
    return arr.reduce((acc, item) => { // recorre todo el array 
        const key = item[prop]; // saca el valor de la propiedad ejemplo edad => 20, 30

        if (!acc[key]) acc[key] = []; // si no existe ese grupo lo crea como un array vacio

        acc[key].push(item); // mete el objeto en el grupo correspondiente

        return acc; // devuelve el acumulador actualizado para seguir
    }, {}); // empieza con un objeto vacio donde se van a guardar los grupos
}