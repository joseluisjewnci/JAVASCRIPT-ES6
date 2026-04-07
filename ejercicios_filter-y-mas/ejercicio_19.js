const numeros = [3, 8, 15, 20, 7, 12, 1, 30];

const resultado = numeros.filter(num => num > 10);
const producto=resultado.map(num => num * 2);

console.log(producto);