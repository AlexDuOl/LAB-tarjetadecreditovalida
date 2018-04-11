# TARJETA DE CREDITO VALIDA

###  Descripción

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

##### Consideraciones Específicas

1. El código debe estar compuesto por 1 función: isValidCard

2. El usuario no debe poder ingresar un campo vacío

### Algoritmo de Luhn

La fórmula verifica un número contra su dígito de chequeo incluido, el cual el usualmente agregado a un número de cuenta parcial para generar el número de cuenta completo. Este número de cuenta debe pasar la siguiente prueba:

A partir del dígito de chequeo incluido, el cual está a la derecha de todo el número, ir de derecha a izquierda duplicando cada segundo dígito.

Sumar los dígitos del resultado juntos con los dígitos sin duplicar del número original.

Si el total de módulo 10 es igual a 0 (si el total termina en cero), entonces el número es válido de acuerdo con la fórmula Luhn, de lo contrario no es válido.


###### Ejemplo algoritmo de Luhn
![Ejemplo de algoritmo de Luhn](/assets/image/GeneracionLuhn.png)

### Pseudocódigo

#####  Descripción

1. Obtener mediante un prompt el número de tarjeta indicando que solamente ingrese números

2. Verificar que el usuario no ingrese un campo vacío, si es así regresar al prompt. Si cumple la condición implementar el algoritmo de Luhn. Para generar el dígito de verificación empleando el algoritmo de Luhn se deben seguir estos pasos:

 - En una secuencia de dígitos dada, el dígito de verificación será el último valor, que en principio se desconoce

 - Partiendo de esa última posición, se multiplica cada dígito de posición par (contando desde la derecha) por dos. Si el resultado es un número de dos dígitos, entonces se suman estos dos valores

 - Posteriormente, se suman todos los dígitos obtenidos

 - El dígito de verificación es el número que se obtiene como residuo después de dividir ese resultado entre 10 (que es lo que en matemáticas se denomina mod-10). En otras palabras, el dígito de verificación es el número que debe agregarse a este resultado para hacer el siguiente múltiplo de 10.

3. Colocar las condiciones para confirmar la validez o invalidez de la tarjeta e imprimir el dato en la página

4. Fin del proceso

### Diagrama de flujo tarjeta de crédito válida

![Diagrama de flujo Tarjeta de crédito válida](/assets/image/DiagramaFlujoTC.png)
