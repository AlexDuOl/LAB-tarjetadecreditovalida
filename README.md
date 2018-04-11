# TARJETA DE CREDITO VALIDA

###  Descripción

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

##### Consideraciones Específicas

1. El código debe estar compuesto por 1 función: isValidCard

2. El usuario no debe poder ingresar un campo vacío

### Algoritmo de Luhn

Es una fórmula de suma de verificación, utilizada para validar una diversidad de números de identificación como números de tarjetas de crédito, números IMEI, etc.

##### Generación del dígito de verificación a través del algoritmo de Luhn

Para generar el dígito de verificación empleando el algoritmo de Luhn se deben seguir estos pasos:

1. En una secuencia de dígitos dada, el dígito de verificación será el último valor, que en principio se desconoce

2. Partiendo de esa última posición, se multiplica cada dígito de posición par (contando desde la derecha) por dos. Si el resultado es un número de dos dígitos, entonces se suman estos dos valores

3. Posteriormente, se suman todos los dígitos obtenidos

4. El dígito de verificación es el número que se obtiene como residuo después de dividir ese resultado entre 10 (que es lo que en matemáticas se denomina mod-10). En otras palabras, el dígito de verificación es el número que debe agregarse a este resultado para hacer el siguiente múltiplo de 10.

###### Ejemplo algoritmo de Luhn
![Ejemplo de algoritmo de Luhn](/assets/image/GeneracionLuhn.png)

### Pseudocódigo

#####  Descripción

1. Obtener mediante un prompt el número de tarjeta indicando que solamente ingrese números

2. Verificar que el usuario no ingrese un campo vacío, si es así regresar al prompt. Si cumple la condición implementar el algoritmo de Luhn

3. Colocar las condiciones para confirmar la validez o invalidez de la tarjeta e imprimir el dato en la página

4. Fin del proceso

### Diagrama de flujo tarjeta de crédito válida

![Diagrama de flujo Tarjeta de crédito válida](/assets/image/DiagramaFlujoTC.png)
