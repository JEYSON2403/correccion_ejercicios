//Invertir el orden de una cadena de texto almacenada en una array, 
//considerar que el tamaño de la cadena es un numero par. 
//world=[’o’,’ñ’,’e’’l’,’i’,’u’,’q’,’a’,’y’,’a’,’u’,’g’].

let world = ['o', 'ñ', 'e', 'l', 'i', 'u', 'q', 'a', 'y', 'a', 'u', 'g'];

for (let i = 0; i < world.length / 2; i++) {
  let temp = world[i];
  world[i] = world[world.length - 1 - i];
  world[world.length - 1 - i] = temp;
}

console.log(world);
