const numeros=[5, 10, 15, 20]; 
const suma= numeros.reduce((acc , numero) => acc + numero, 0 );
console.log ("suma:", suma);