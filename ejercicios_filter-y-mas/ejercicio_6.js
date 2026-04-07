const estudiantes=[{nombre:"ana", nota:"4.5"},{nombre:"luis", nota:"2.8"},
    {nombre:"marta", nota:"3.7"},{nombre:"carlos", nota:"2.5"}
];
const aprobados= estudiantes.filter(estudiantes => estudiantes.nota >= 3.0);
console.log("aprobados:", aprobados);