const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número del 1 al 7: ", function(numero) {

  numero = Number(numero);

  switch(numero){
    case 1:
      console.log("lunes");
      break;
    case 2:
      console.log("martes");
      break;
    case 3:
      console.log("miercoles");
      break;
    case 4:
      console.log("jueves");
      break;
    case 5:
      console.log("viernes");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;
    default:
      console.log("dia no valido");
  }

  rl.close();
});