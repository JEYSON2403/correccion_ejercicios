//El mismo Ejercicio 01  
//pero considerar que las combinaciones no se repitan,
//es decir, las salida seria:


let nums = [2, 4, 6, 8];
let chars = ['a', 'b', 'c', 'd'];

for (let i = 0; i < chars.length; i++) {
  let line = '';
  for (let j = 0; j < nums.length; j++) {
    line += chars[i] + nums[j] + ' ';
  }
  console.log(line);
}

