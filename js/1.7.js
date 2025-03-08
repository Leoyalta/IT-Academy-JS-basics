// Exercici 1.7: Promises & Async/Await
// Nivell 1
// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      resolve("Hola, món");
    } else {
      reject("Adeu");
    }
  }, 2000);
});
// console.log(promise);

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
promise.then((result) => console.log(result));

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
let inputValue = "Hola";

const checkValuePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (inputValue === "Hola") {
      resolve("hola mundo!");
    } else {
      reject("ooops, there is no Hola...");
    }
  }, 2000);
});
checkValuePromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

// async function fetchResult() {
//   const postpondResult = await promise;
//   console.log(promise, postpondResult);
// }
// fetchResult();

// Nivell 2
// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function fetchAnyResult() {
  try {
    const postpondResult = await promise;
    console.log(promise, postpondResult);
  } catch (error) {
    console.error("Show error:", error);
  }
}

fetchAnyResult();

// Nivell 3
// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const firstPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.1) {
      resolve("firstPromise -  success!");
    } else {
      reject("Something went wrong in firstPromise...");
    }
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.1) {
      resolve("secondPromise -  success!");
    } else {
      reject("Something went wrong in secondPromise...");
    }
  }, 3000);
});
Promise.all([firstPromise, secondPromise])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
