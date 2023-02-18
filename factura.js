





let start=0;
let end=0;
let factura ="0001-0001-000000001";
 for( let i=0;i<factura.length ;i++ ){
    if( factura[i]==="-"){
        if (start==0){
            start=i+1;
        }
        else
            end=i;
        }
    
    }

 let ss = factura.substring(start,end)
 console.log(ss)


 /*Este código es una solución para extraer el número de la factura de un formato específico. En el ejemplo dado, 
 la factura está en el formato "0001-0001-000000001", donde los guiones ("-") separan los distintos campos.
El código utiliza un bucle "for" para iterar sobre cada carácter de la cadena de texto "factura". 
Cuando encuentra un guion, utiliza dos variables "start" y "end" para identificar 
los índices donde comienza y termina el número de la factura. Luego, utiliza la función "substring" 
para extraer el número de la factura (que se encuentra entre los índices "start" y "end") 
en una nueva variable llamada "ss".
Finalmente, el código imprime en la consola el número de la factura (que en este caso es "000000001").*/