/*Convertir en un numero decimal un numero binario de 4 bits almacenado en un array.

`binaryNumber=[0, 1, 0, 1]`

Nota: Se puede usar la lógica del ejercicio 09*/


let binaryNumber = [0, 1, 0, 1];
let decimalNumber = 0;

for (let i = 0; i < binaryNumber.length; i++) {
  decimalNumber += binaryNumber[i] * Math.pow(2, binaryNumber.length - 1 - i);
}

console.log(decimalNumber);


/*Creamos un array llamado binaryNumber con el valor [0, 1, 0, 1], 
que representa el número binario que queremos convertir a decimal.
Creamos una variable llamada decimalNumber con el valor inicial de 0, 
que representará el número decimal resultante.
Usamos un ciclo for para iterar a través de los elementos del array binaryNumber.
En cada iteración, 
multiplicamos el elemento actual de binaryNumber por 2 elevado a la potencia correspondiente 
(es decir, 2^3 para la posición más a la izquierda, 2^2 para la siguiente posición, etc.) usando la función Math.pow(). 
Luego, sumamos el resultado a decimalNumber.
Imprimimos el número decimal resultante usando console.log().
El resultado en la consola sería: 5, que es el número decimal equivalente al número binario de 4 bits [0, 1, 0, 1].*/