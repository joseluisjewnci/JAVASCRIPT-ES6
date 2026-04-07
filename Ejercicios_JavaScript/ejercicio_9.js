const palabras=["hola" , "mundo", "js"];
const letras= palabras.reduce((acc , palabras)=> acc + palabras.length, 0 )
console.log("letras:", letras);