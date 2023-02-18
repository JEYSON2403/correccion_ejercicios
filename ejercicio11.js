

let t = 5 ;
let x = 9;

let v = [];

for (let i = 1; i <= t; i++) {
  let multiplo = i * x;
  v.push(multiplo);
}

console.log(v);

/*
// Pedir al usuario que ingrese el valor de t y x
let t = parseInt(prompt("Ingrese el valor de t: "));
let x = parseInt(prompt("Ingrese el valor de x: "));

// Crear un array vacío v
let v = [];

// Utilizar un bucle for para llenar el array v con múltiplos de x
for (let i = 1; i <= t; i++) {
  if (i === 1) {
    v.push(x);
  } else {
    let ultimoMultiplo = v[v.length - 1];
    let nuevoMultiplo = ultimoMultiplo + x;
    v.push(nuevoMultiplo);
  }
}

// Imprimir el array v
console.log(v);

*/