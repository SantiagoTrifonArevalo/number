// Ejercicios JS - Numbers: Usad Math. en todos los ejercicios
 
// 1.Calcula la operación 2 elevado a la 4
console.log(Math.pow(2, 4))

// 2.Calcula la raíz cuadrada de 25.
console.log(Math.sqrt(25));

// 3.Calcula el valor absoluto de la operación 4 - 5.
console.log(4-5);
console.log(Math.abs(-1));

// 4.Calcula la raíz cuadrada de 2 y redondea el resultado.
console.log(Math.sqrt(2));
console.log(Math.round(1.4142135623730951));

// 5.Calcula la operación 10 dividido entre 3 y redondea el resultado hacia abajo.
console.log( 10/3);
console.log(Math.floor(3.3333333333333335));

// 6.Calcula la operación 3 dividido entre 2 y redondea el resultado hacia arriba.
console.log(3/2);
console.log(Math.ceil(1.5));

// 7.Dada la siguiente lista de números (5, 3, 6, 4, 2, 9, 8):

// 1Encuentra el número más bajo y guárdalo en la variable min.
console.log(Math.min(5, 3, 6, 4, 2, 9, 8));

// 1Encuentra el número más alto y guárdalo en la variable max
console.log(Math.max(5, 3, 6, 4, 2, 9, 8));

console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

// Ejercicios JS - Strings

// 1.Declara una variable llamada sentence y dale el valor "JavaScript no es tan difícil como me había dicho Ángel...".
let sentence="JavaScript no es tan difícil como me había dicho Ángel...";

// 2.Muestra el contenido de sentence en la consola.
console.log(sentence);

// 3.Muestra en la consola la longitud de sentence.
console.log(sentence.length);

// 4.Cambia todos los caracteres de sentence a mayúsculas.
console.log(sentence.toUpperCase());

// 5.Cambia todos los caracteres de sentence a minúsculas.
console.log(sentence.toLowerCase());

// 6.Crea una variable llamada js y asígnale como valor el resultado de cortar o extraer la palabra "JavaScript" de sentence. Comprueba que haya funcionado.
sentence1 = "Me gusta programar en JavaScript";
let js = sentence1.slice(21, 32);

console.log(js);

// 7.Crea una variable llamada profe y asígnale como valor el resultado de cortar o extraer la palabra "Ángel" de sentence. Comprueba que haya funcionado.
sentence2 = "El profesor Ángel enseña javascript";
let profe = sentence2.slice(12, 18);

console.log(profe);

// 8.Comprueba si sentence contiene el string "script".
console.log(sentence.includes('script'));

// 9.Cambia a una variable newSentence el valor de sentence usando replace() para que diga "Python no es tan difícil como me había dicho Marcos...".
let newSentence=sentence.replace("JavaScript","Python").replace("Ángel","Marcos");
console.log(newSentence);

// 10.¿Cuál es el caracter que se encuentra en la posición 4 de newSentence? Muéstralo en la consola.
// Resultado "o"
console.log(newSentence.charAt(4));

// 11.¿Cuál es la posición de la primera ocurrencia del caracter "a" en newSentence? Muéstralo en la consola.
// Resultado "14"
console.log(newSentence.indexOf("a"));

// 12.¿Y la posición de la última ocurrencia?
// Resultado
console.log(newSentence.lastIndexOf("a"));

// 13.¿Cuál es la posición de la primera ocurrencia del caracter "z" en newSentence? Muéstralo en la consola.
// Resultado "-1"
console.log(newSentence.indexOf("z"));

// 14.Crea una variable llamada doubts que sea el resultado de concatenar newSentence con el string "pero todavía es pronto para saberlo".
let doubts = newSentence.concat( "pero todavía es pronto para saberlo");
console.log(doubts);

// 15.Crea la variable longitud y asígnale la longitud de newSentence. A continuación, muestra por consola el caracter que se encuentra en la posición que guarda longitud. Escribe en un comentario por qué da ese resultado.
// Resultado
let longitud = newSentence.length;
console.log(newSentence.charAt(longitud));

//Cuando intentas acceder al carácter en la posición longitud, obtendrás undefined. Esto se debe a que los índices en JavaScript van de 0 a longitud-1. En este caso, la posición longitud está fuera del rango válido de índices, por lo que no existe un carácter en esa posición y se devuelve undefined.

// 16.Usando charAt() y la variable longitud del ejercicio anterior, consigue mostrar por consola el último caracter de newSentence.
// Resultado
// console.log(longitud.charAt.lastIndexOf);
// Cannot read properties of undefined (reading 'lastIndexOf')
//     at main.js:98:29

// 17.Crea dos variables: name1 con valor "John" y name2 con valor "Anna". A continuación, crea otras dos variables más: long1 con valor la longitud de la variable name1 y long2 con valor la longitud de la variable name2. Muestra por consola si long1 es estrictamente igual a long2.
// Resultado "true"
name1="John";
name2="Anna";
long1=name1.length;
long2=name2.length;
console.log(long1==long2);

// 18.Ahora crea la variable bothNames y asígnale como valor la concatenación de name1 y name2. Luego crea la variable finalLong y asígnale como valor la longitud de bothNames. Muestra por consola:
// Si finalLong es estrictamente igual a la suma de long1 y long2.
// Si long1 es mayor que long2, o long2 es mayor que long1.
// Si las dos operaciones anteriores son verdaderas.