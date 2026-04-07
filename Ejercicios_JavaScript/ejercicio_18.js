let suma = 0;
let numero = 1;
let contador = 0;

while (suma < 100) {
    console.log("Número agregado:", numero);
    suma += numero;
    numero++;
    contador++;
}

console.log("Suma final:", suma);
console.log("Cantidad de números usados:", contador);