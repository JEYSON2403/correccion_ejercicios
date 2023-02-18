/*Dado un vector de números  buscar el numero mayor y guardar en la variable `m`.

`nums=[1,8,2,5,5]`

`m=8`*/

let nums = [1, 8, 2, 5, 5, 12, 16, 4, 16];
let m = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > m) {
    m = nums[i];
  }
}

console.log(m);
