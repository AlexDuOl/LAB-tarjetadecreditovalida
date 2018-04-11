//Obteniendo número de tarjeta
var numCard = prompt("Ingresa el número de tarjeta **Recuerda colocar solamente números");
//Creando función y validando que el usuario no ingrese un espacio vacio
function isValidCard(numCard){
  while ((numCard) == "") {
    numCard = prompt("Ingresa el número de tarjeta **Recuerda colocar solamente números");
  }
  //Convirtiendo un string a un array y colocandolo al revés
   var numCardReverse = (numCard.split("")).reverse();
     var pairNum = []; //variable para guardar el resultado
   //Iterando en el array
    for(var i=0; i < numCardReverse.length; i++){
       if( i % 2 !== 0){ // Condición para obtener los números en las posiciones pares
         var multiply = numCardReverse[i] * 2; // Variable para multiplicar los números en posición par
           if(multiply >= 10) { // Condición para verificar los números con dos dígitos
             var sum = 0; // Variable para almacenar la suma de todos los digitos
             while (multiply){ // Condición para verificar los números en posición par que multiplicados den cifras con dos dígitos para obtener  un número de un solo dígito
              sum += multiply % 10; // Se extrae el residuo del número
              multiply = Math.floor(multiply/10); // Redondeamos el cociente de la división con Math.floor
            }
              pairNum.push(sum); // Colocamos los números en posición par en la variable sum
          } else{
           pairNum.push(multiply); // Colocamos los números en posición impar de la variable multiply
         }
      } else {
            pairNum.push(parseInt(numCardReverse[i])); // Convertimos el string en entero y los colocamos en el array
    }
   }

   var numToValidate = 0; // Creamos una variable numberToValidate para darle un valor de inicio
     for(var j = 0; j < pairNum.length; j++){ //Iterar los números pares
       numToValidate += pairNum[j]; //Se concatenan los números
     }
     if(numToValidate % 10 === 0){ // Deacuerdo al algoritmo, si al sumar todos los números, el residuo de la división de estos entre 10 es 0 entonces la tarjeta es
       return "Válida"; // El número es valido
     }else{
       return "Inválida"; // El número es invalido
     }
   }
   document.write(isValidCard(numCard));
