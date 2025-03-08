// Exercici 1.3: Callbacks
// Nivell 1
// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

const someCallback = (arg) => `Arg is number ${arg}`;
function processar(nombre, callback) {
  return callback(nombre);
}
console.log(processar(5, someCallback));

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const sumNumbers = (a, b) => a + b;

function calculadora(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}
console.log(calculadora(2, 2, sumNumbers));

// Nivell 2
// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const salutacio = (userName) => `Hello ${userName}`;
function esperarISaludar(nom, callback) {
  setTimeout(() => {
    console.log(callback(nom));
  }, 2000);
}
esperarISaludar("Mango", salutacio);

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const fruits = ["orange", "pear", "apple", "kivi"];
const addSomeText = (elem) => elem.length;
function processarElements(arr, callback) {
  let newFruitList = [];
  for (const element of arr) {
    newFruitList.push(`${element} length is ${callback(element)}`);
  }
  return newFruitList;
}
console.log(processarElements(fruits, addSomeText));

// Nivell 3
// Exercici 5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
const trimText = (text) => text.trim();

function processarCadena(str, callback) {
  const upperString = str.toUpperCase();
  return callback(upperString);
}
console.log(processarCadena("   some text   ", trimText));
