/*Dado un vector de numero determinar si es palindrome.
`nums=[1,2,3,2,1]`
Si es palindrome
`nums=[1,2,3,2,0]`
No es palindrome*/



const nums1 = [1, 2, 3, 2, 1];
const nums2 = [1, 2, 3, 2, 0];

let esPalindromo = true;

for (let i = 0; i < nums1.length / 2; i++) {
  if (nums1[i] !== nums1[nums1.length - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

if (esPalindromo) {
  console.log("El vector nums1 es palíndromo");
} else {
  console.log("El vector nums1 no es palíndromo");
}

esPalindromo = true;

for (let i = 0; i < nums2.length / 2; i++) {
  if (nums2[i] !== nums2[nums2.length - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

if (esPalindromo) {
  console.log("El vector nums2 es palíndromo");
} else {
  console.log("El vector nums2 no es palíndromo");
}


/*El vector nums1 es palíndromo
El vector nums2 no es palíndromo

En el primer caso, el vector nums1 es palíndromo porque sus elementos son simétricos respecto al centro del vector. 
En cambio, en el segundo caso,
 el vector nums2 no es palíndromo porque el elemento en la posición central es diferente.*/