/*Dado un vector de numero determinar si su tamaño es par o impar.
`nums=[1,2,3,2,1]`
Si es palindrome
`nums=[1,2,3,2,0]`
No es palindrome*/


let nums = [1, 2, 3, 2, 1];
let size = nums.length;

if (size % 2 == 0) {
    console.log("El tamaño del vector es par.");
} else {
    console.log("El tamaño del vector es impar.");
}


/*El operador % devuelve el resto de una división, en este caso de size entre 2.
 Si el resto es 0, entonces el tamaño es par, de lo contrario es impar.*/