const readline = require('readline');

// Crear interfaz de lectura de terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función principal
function main() {
  console.log("===== CONVERSOR DE UNIDADES =====");
  console.log("Soporta: Temperatura (C, F, K), Longitud (m, km, cm)");
  console.log("Formato: value from to (Ej: 100 C F)");
  console.log("Escriba 'salir' para terminar.");

  rl.prompt();
  rl.on('line', (input) => {
    const line = input.trim();

    if (line.toLowerCase() === 'salir') {
      console.log("Programa finalizado correctamente.");
      rl.close();
      return;
    }

    const partes = line.split(' ');

    if (partes.length !== 3) {
      console.log("ERROR: Formato inválido. Debe ser: value from to");
      rl.prompt();
      return;
    }

    const valorStr = partes[0];
    const fromUnidad = partes[1].toUpperCase();
    const toUnidad = partes[2].toUpperCase();

    const valor = Number(valorStr);

    // Validar número finito
    if (isNaN(valor) || !isFinite(valor)) {
      console.log(`ERROR: Valor inválido: ${valorStr}`);
      rl.prompt();
      return;
    }

    const tempUnidades = ["C", "F", "K"];
    const longUnidades = ["M", "KM", "CM"];

    let categoriaFrom = "";
    let categoriaTo = "";

    if (tempUnidades.includes(fromUnidad)) categoriaFrom = "temp";
    if (tempUnidades.includes(toUnidad)) categoriaTo = "temp";
    if (longUnidades.includes(fromUnidad)) categoriaFrom = "long";
    if (longUnidades.includes(toUnidad)) categoriaTo = "long";

    // Validar unidades soportadas
    if (categoriaFrom === "" || categoriaTo === "") {
      console.log(`ERROR: Unidad no soportada: ${fromUnidad} o ${toUnidad}`);
      rl.prompt();
      return;
    }

    // Validar categorías
    if (categoriaFrom !== categoriaTo) {
      console.log(`ERROR: Categorías incompatibles: ${fromUnidad} a ${toUnidad}`);
      rl.prompt();
      return;
    }

    // Conversión
    let resultado = 0;

    if (categoriaFrom === "temp") {
      resultado = convertirTemperatura(valor, fromUnidad, toUnidad);
    } else {
      resultado = convertirLongitud(valor, fromUnidad, toUnidad);
    }

    console.log(`Resultado: ${resultado.toFixed(2)} ${toUnidad}`);
    rl.prompt();
  });
}

// ================== FUNCIONES ==================
function convertirTemperatura(valor, fromU, toU) {
  if (fromU === toU) return valor;

  let res = valor;

  // Convertir primero a Celsius
  switch(fromU) {
    case "F":
      res = (valor - 32) * 5 / 9;
      break;
    case "K":
      res = valor - 273.15;
      break;
  }

  // Convertir a destino
  switch(toU) {
    case "C":
      return res;
    case "F":
      return (res * 9 / 5) + 32;
    case "K":
      return res + 273.15;
  }

  return res;
}

function convertirLongitud(valor, fromU, toU) {
  let res = valor;

  // Convertir a metros
  switch(fromU) {
    case "KM":
      res = valor * 1000;
      break;
    case "CM":
      res = valor / 100;
      break;
    case "M":
      res = valor;
      break;
  }

  // Convertir a destino
  switch(toU) {
    case "M":
      return res;
    case "KM":
      return res / 1000;
    case "CM":
      return res * 100;
  }

  return res;
}

// Iniciar programa
main();