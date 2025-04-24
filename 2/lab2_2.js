const readline = require("readline");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let current = 0;
let minPrime = null;
let minPrimeCount = 0;

console.log(" Введіть кількість чисел у послідовності:");

rl.on("line", (input) => {
  if (count === 0) {
    count = Number(input);
    console.log(`Введіть ${count} цілих чисел:`);
  } else {6
    let num = Number(input);
    current++;

    if (isPrime(num)) {
      if (minPrime === null || num < minPrime) {
        minPrime = num;
        minPrimeCount = 1;
      } else if (num === minPrime) {
        minPrimeCount++;
      }
    }

    if (current === count) {
      if (minPrime !== null) {
        console.log(` Мінімальне просте число: ${minPrime}, кількість: ${minPrimeCount}`);
      } else {
        console.log(" Простих чисел не знайдено.");
      }
      rl.close();
    }
  }
});
