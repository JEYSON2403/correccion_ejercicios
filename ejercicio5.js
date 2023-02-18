//Contar cuantos números impares tiene el siguiente 
//array: `nums=[3, 5, 6, 7, 3, 5, 6, 7]`
//**Nota:** Usar el operador mod, este operador devuelve el residuo 
//de dividir dos números.
//Ejemplos: `9 mod 2 = 1` `8 mod 2 = 0`
let nums = [3, 5, 6, 7, 3, 5, 6, 7];
let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    count++;
  }
}

console.log(`El array tiene ${count} números impares.`);




