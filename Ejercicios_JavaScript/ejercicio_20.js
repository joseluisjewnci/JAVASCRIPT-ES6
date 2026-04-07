const ventas = [
  { producto: "Mouse", cantidad: 3, precio: 50000 },
  { producto: "Teclado", cantidad: 2, precio: 120000 },
  { producto: "Monitor", cantidad: 1, precio: 800000 },
  { producto: "USB", cantidad: 5, precio: 30000 }
];

// 1. Filtrar
const filtrados = ventas.filter(v => v.cantidad >= 2);

// 2. Ordenar de mayor a menor por precio
const ordenados = filtrados.sort((a, b) => b.precio - a.precio);

// 3. Crear frases
const frases = ordenados.map(v => 
    `${v.producto} - Total: ${v.cantidad * v.precio}`
);

console.log(frases);

// 4. Total de todas las ventas
const totalVentas = ventas.reduce((acc, v) => 
    acc + (v.cantidad * v.precio), 0
);

console.log("Total de ventas:", totalVentas);