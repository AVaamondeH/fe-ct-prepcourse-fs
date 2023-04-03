/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let par = Object.entries(objeto);

    let arrayOfArrays = par.map (pares => [pares[0], pares [1]]);


  return arrayOfArrays
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let caracteres = {};

   for (let i = 0; i < string.length; i++) {
      let letra = string.charAt(i);
      if (caracteres[letra]) {
         caracteres[letra]++;
      } else {
         caracteres[letra] = 1;
      }
   }

   let letrasOrdenadas = Object.keys(caracteres).sort();

   let caracteresOrdenados = {};
   for (let i = 0; i < letrasOrdenadas.length; i++) {
      let letra = letrasOrdenadas[i];
      caracteresOrdenados[letra] = caracteres[letra];
   }

   return caracteresOrdenados;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let palabra = string.split("")
   let mayus = [];
   let minus = [];
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].charCodeAt() > 64 && palabra[i].charCodeAt() < 91) {
          mayus.push(palabra[i])
        } if (palabra[i].charCodeAt() > 96 && palabra[i].charCodeAt() < 123 ){
          minus.push(palabra[i])
        }
        
        }
        return mayus.join("") + minus.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   String.prototype.reverse = function () {
      return this.split("").reverse().join("")
      }       
    
    let reverse = frase.reverse();
    let palabraReverse = reverse.split(" ");
    let palabraReverseFix = [];
    
    for (let i = 0; i < palabraReverse.length; i++) {
      palabraReverseFix.unshift(palabraReverse[i])
    }
    return palabraReverseFix.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let convert = numero.toString();
   let array1 = convert.split("");
   let array2 = convert.split("").reverse();
   
   for (let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2 [i]) {
       return "No es capicua";
      }
   }
   return "Es capicua";

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let palabra = string.split("");
   let palabraFix = [];
   for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] == "a" || palabra[i] == "b" || palabra[i] == "c") {
         continue
      } else {
         palabraFix.push(palabra[i])
      }
   }
   return palabraFix.join("")

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newString = ordenarPorLongitud(arrayOfStrings);

   function ordenarPorLongitud(arr) {
   arr.sort(function(a, b) {
     return a.length - b.length;
   });
   
   return arr;
 }
   
   return newString
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let inter = [];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         inter.push(array1[i])
      }
      
   }
   return inter
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
