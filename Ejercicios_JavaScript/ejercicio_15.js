const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un color: ", function(color) {

    switch (color.toLowerCase()) {
        case "rojo":
            console.log("Color de alerta");
            break;
        case "verde":
            console.log("Color de avance");
            break;
        case "amarillo":
            console.log("Color de precaución");
            break;
        default:
            console.log("Color no reconocido");
    }

    rl.close();
});