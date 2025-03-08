// Nivell 1
// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = ["q", "w", "r", "t"];
const array2 = [1, 2, 3, 4];

const array3 = [...array1, ...array2];
console.log(array3);

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const suma = (...args) => {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(suma(1, 2, 3, 4, 5));

// Nivell 2

// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
  name: "buba",
  email: "buba@mail.com",
};
const objecte2 = {
  ...objecte1,
  email: "supaB@mail.es",
  tel: +34658123765,
};
console.log(
  `This is obj 2: ${JSON.stringify(objecte2)}, 
  and this one is obj 1:  ${JSON.stringify(objecte1)}`
);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const arrOfElements = [
  1,
  "green",
  true,
  { userName: "mango" },
  [9, 7, 5, 3, 1],
];
const [number, color, ...rest] = arrOfElements;
console.log(number, color, rest);

// Nivell 3
// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function doStuff(a, b, c) {
  console.log(a, b, c);
}

const stuff = ["kiki", "kivi", "buba"];
doStuff(...stuff);

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const data = {
  isOnline: true,
  userName: "kiki",
  time: new Date(),
};

const stat = {
  isNewUser: false,
  password: "qwerty",
};
const mergedObj = { ...data, ...stat };
console.log(mergedObj);
