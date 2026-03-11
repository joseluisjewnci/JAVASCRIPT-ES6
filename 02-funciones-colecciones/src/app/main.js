"use strict";

// Funciones setup + validaciones base
//convierte en numero, verifica y convierte el numero
function toNumberString(value, label = "Valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`${label} debe ser un número válido`);
  }
  return n;
}
//verifica que no sea negativo si no lanza error 
function assertNonNegative(value, label= "valor") {
  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }
}
/*valida texto, convierte a texto y elimina espacios, long text0= 0, 
*si el numero es invalido lanza error, devuelve el numero convertido
*/
function toNonEmptyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
  }
  return s;
}

// normalizar gasto
/*crea una funcion, toma id del objeto y verifica q no este vacio, 
*verifica q no sea negativo
*/
function normalizeExpense(raw) {
  const id = toNonEmptyString(raw.id, "ID");
  const fecha = toNonEmptyString(raw.fecha, "Fecha");
  const categoria = toNonEmptyString(raw.categoria, "Categoría");
  const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
  const monto = toNumberString(raw.monto, "Monto");
  assertNonNegative(monto, "Monto");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}

// Dataset de ejemplo

const expenses = [
  normalizeExpense({
    id: "e1",
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 850000,
  }),
  normalizeExpense({
    id: "e2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),
  normalizeExpense({
    id: "e3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),
  normalizeExpense({
    id: "e4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 200000,
  }),
  normalizeExpense({
    id: "e5",
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso en línea",
    monto: 1200000,
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-02-06",
    categoria: "Educación",
    descripcion: "Alimentación",
    monto: 120000,
  }),
  normalizeExpense({
    id: "e7",
    fecha: "2024-02-07",
    categoria: "Salud",
    descripcion: "Medicamentos",
    monto: 300000,
  }),
  normalizeExpense({
    id: "e8",
    fecha: "2024-02-08",
    categoria: "Entretenimiento",
    descripcion: "Parque de diversiones",
    monto: 450000,
  }),
];

// estadísticas básicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto);

  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// totales por categoria

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto;
    return acc;
  }, {});
}

// formato moneda Colombia

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

// reporte en consola

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses);

  console.group("REPORTE - ANALIZADOR DE GASTOS");

  console.log("Resumen:");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);

  // totales por categoria

  console.log("Totales por categoría:");

  const categoriasOrdenadas = Object.entries(byCat)
    .map(([categoria, total]) => ({
      Categoria: categoria,
      Total: total,
    }))
    .sort((a, b) => a.Total - b.Total);

  console.table(
    categoriasOrdenadas.map((c) => ({
      Categoria: c.Categoria,
      Total: formatCOP(c.Total),
    }))
  );

  // gasto más alto

  const gastoMasAlto = expenses.reduce((max, e) =>
    e.monto > max.monto ? e : max
  );

  console.log("Gasto más alto:");
  console.table([
    {
      Fecha: gastoMasAlto.fecha,
      Categoria: gastoMasAlto.categoria,
      Descripcion: gastoMasAlto.descripcion,
      Monto: formatCOP(gastoMasAlto.monto),
    },
  ]);

  // últimos gastos

  console.log("Últimos gastos:");

  const ultimosGastos = [...expenses]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, 5);

  console.table(
    ultimosGastos.map((g) => ({
      Fecha: g.fecha,
      Categoria: g.categoria,
      Descripcion: g.descripcion,
      Monto: formatCOP(g.monto),
    }))
  );

  console.groupEnd();
}

// ejecutar programa

printReport(expenses);


