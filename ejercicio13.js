
let nums = [1, 2, 2, 3, 4];
let duplicado = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      duplicado = true;
      break;
    }
  }
  if (duplicado) {
    break;
  }
}

console.log(duplicado); 



 /*En este código, inicializamos la variable duplicado con false.
  Luego, iteramos sobre los elementos del array nums utilizando un bucle for,
   y para cada elemento, verificamos si ya ha sido encontrado previamente en el array utilizando otro bucle for. 
   Si se encuentra el elemento más de una vez, actualizamos el valor de duplicado a true y rompemos el bucle. 
   Si terminamos la búsqueda sin encontrar duplicados, entonces duplicado se mantiene como false. Finalmente,
  imprimimos el valor de duplicado en la consola.*/