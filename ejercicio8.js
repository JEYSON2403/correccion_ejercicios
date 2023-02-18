//Invertir el orden de una cadena de texto almacenada en una array, ,
//considerar que el tamaño de la cadena es un numero
//imparworld=[’s’,’o’,’n’,’a’,’c’,’n’,’e’,’u’,’c’]

let world = ['s', 'o', 'n', 'a', 'c', 'n', 'e', 'u', 'c'];

for (let i = 0; i < (world.length - 1) / 2; i++) {
  let temp = world[i];
  world[i] = world[world.length - 1 - i];
  world[world.length - 1 - i] = temp;
}

console.log(world);
