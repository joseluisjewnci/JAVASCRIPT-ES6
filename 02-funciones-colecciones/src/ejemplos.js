// MAP
// ======================

// Ejemplo 1: Calcular precios con IVA (útil en e-commerce)
const precios = [100, 250, 80];
const preciosConIVA = precios.map(precio => precio * 1.21);
console.log("Precios con IVA:", preciosConIVA);
// Sirve para transformar cada precio agregando impuesto automáticamente.


// Ejemplo 2: Obtener solo los nombres de usuarios (útil en frontend)
const usuariosMap = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 30 }
];

const nombres = usuariosMap.map(usuario => usuario.nombre);
console.log("Nombres:", nombres);
// Sirve para extraer solo una propiedad específica de objetos.


// Ejemplo 3: Convertir temperaturas (útil en apps del clima)
const celsius = [0, 20, 30];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log("Fahrenheit:", fahrenheit);
// Sirve para transformar datos numéricos.


/* Ejemplo 4: Formatear datos para mostrar en pantalla 
   (útil cuando muestras productos en una web) */
const productosMap = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 50 }
];

const etiquetas = productosMap.map(p => `${p.nombre} - $${p.precio}`);
console.log("Etiquetas:", etiquetas);
// Sirve para convertir objetos en texto listo para la interfaz.


// Ejemplo 5: Convertir texto a mayúsculas (útil en normalización de datos)
const categorias = ["ropa", "tecnologia", "hogar"];
const categoriasMayus = categorias.map(cat => cat.toUpperCase());
console.log("Categorías en mayúsculas:", categoriasMayus);
// Sirve para transformar texto.

// ======================
// FILTER
// ======================

// Ejemplo 1: Filtrar mayores de edad (útil en sistemas de registro)
const usuariosFilter = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 }
];

const mayores = usuariosFilter.filter(u => u.edad >= 18);
console.log("Mayores de edad:", mayores);
// Sirve para quedarse solo con los datos que cumplen una condición.


// Ejemplo 2: Mostrar productos en oferta (útil en tienda online)
const productosFilter = [
  { nombre: "Laptop", descuento: true },
  { nombre: "Mouse", descuento: false }
];

const enOferta = productosFilter.filter(p => p.descuento);
console.log("Productos en oferta:", enOferta);
// Sirve para mostrar solo productos con descuento.


// Ejemplo 3: Filtrar pedidos entregados (útil en sistema logístico)
const pedidos = [
  { id: 1, estado: "entregado" },
  { id: 2, estado: "pendiente" }
];

const entregados = pedidos.filter(p => p.estado === "entregado");
console.log("Pedidos entregados:", entregados);
// Sirve para separar pedidos según su estado.


// Ejemplo 4: Filtrar palabras largas (útil en análisis de texto)
const palabrasFilter = ["sol", "javascript", "mesa"];
const largas = palabrasFilter.filter(p => p.length > 5);
console.log("Palabras largas:", largas);
// Sirve para filtrar datos por tamaño o condición específica.


// Ejemplo 5: Separar ingresos (útil en app financiera)
const movimientos = [-100, 200, -50, 300];
const ingresos = movimientos.filter(m => m > 0);
console.log("Ingresos:", ingresos);
// Sirve para separar valores positivos de negativos.

// ======================
// REDUCE
// ======================

// Ejemplo 1: Sumar ventas del día (útil en reportes financieros)
const ventas = [100, 200, 150];
const totalVentas = ventas.reduce((acc, venta) => acc + venta, 0);
console.log("Total ventas:", totalVentas);
// Sirve para sumar todos los valores de un array.


// Ejemplo 2: Calcular total del carrito (útil en checkout)
const carrito = [
  { producto: "Laptop", precio: 1000 },
  { producto: "Mouse", precio: 50 }
];

const totalCarrito = carrito.reduce((acc, item) => acc + item.precio, 0);
console.log("Total carrito:", totalCarrito);
// Sirve para acumular valores dentro de objetos.


// Ejemplo 3: Contar palabras repetidas (útil en análisis de datos)
const palabrasReduce = ["hola", "adios", "hola", "hola"];

const conteo = palabrasReduce.reduce((acc, palabra) => {
  acc[palabra] = (acc[palabra] || 0) + 1;
  return acc;
}, {});
console.log("Conteo de palabras:", conteo);
// Sirve para crear un objeto contador.


// Ejemplo 4: Encontrar el número mayor (útil en estadísticas)
const numeros = [5, 12, 8, 20];

const mayor = numeros.reduce((acc, num) =>
  num > acc ? num : acc
);
console.log("Número mayor:", mayor);
// Sirve para comparar y quedarse con el valor más grande.


// Ejemplo 5: Agrupar productos por categoría (útil en dashboards)
const productosReduce = [
  { nombre: "Laptop", categoria: "tecnologia" },
  { nombre: "Camisa", categoria: "ropa" },
  { nombre: "Celular", categoria: "tecnologia" }
];

const agrupados = productosReduce.reduce((acc, producto) => {
  if (!acc[producto.categoria]) {
    acc[producto.categoria] = [];
  }
  acc[producto.categoria].push(producto);
  return acc;
}, {});

console.log("Productos agrupados:", agrupados);
// Sirve para reorganizar datos en grupos.