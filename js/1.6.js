// Exercici 1.6: Array loops
// Nivell 1
// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

const employees = ["Anna", "Bernat", "Clara"];
const logEmployees = employees.forEach((employee) => console.log(employee));

// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
for (const name of employees) {
  console.log(name);
}

// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.filter((num) => num % 2 === 0));

// Nivell 2
// Exercici 4
// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
const { nom, edat, ciutat } = obj;
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

for (const numero of numeros) {
  console.log(numero);
  if (numero === 5) {
    break;
  }
}

// Nivell 3
// Exercici 6
// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

for (let index = 0; index < employees.length; index++) {
  console.log(` ${employees[index]} ${index}`);
}

for (const employee of employees) {
  console.log(`${employee} - index ${" employees...???"}`);
}
