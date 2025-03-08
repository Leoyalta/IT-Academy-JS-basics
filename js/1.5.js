// Exercici 1.5: Array transformations
// Nivell 1
// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const nums = [1, 2, 3, 4];
const square = nums.map((num) => num ** 2);

console.log(square);

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const filteredNums = nums.filter((num) => num % 2 === 0);

console.log(filteredNums);

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numbersArr = [1, 10, 8, 11];

const findNum = numbersArr.find((num) => num > 10);
console.log(findNum);

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const someNums = [13, 7, 8, 21];

const sumOfNums = someNums.reduce((acc, num) => acc + num, 0);

console.log(sumOfNums);

// Nivell 2
// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:ʼ

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const sequence = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const transformFunc = (arr) => {
  const result = arr
    .filter((num) => num >= 10)
    .map((filteredNum) => filteredNum * 2)
    .reduce((acc, num) => acc + num, 0);
  return result;
};

console.log(transformFunc(sequence));

// Nivell 3
// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const sequence2 = [11, 12, 13, 14];
const some = sequence2.some((elem) => elem > 10);
const every = sequence2.every((elem) => elem > 10);

console.log(some);
console.log(every);
