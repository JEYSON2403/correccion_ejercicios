//Intercambiar la posición entre el primero y el ultimo elemento 
//del siguiente array: name=[’a’,’o’,’l’,’h’].
//Usar una variable auxiliar.

let name = ['a', 'o', 'l', 'h'];
let aux = name[0];
name[0] = name[name.length - 1];
name[name.length - 1] = aux;
console.log(name);
