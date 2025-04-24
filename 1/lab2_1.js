const readline = require('readline');

const verticalStrip1 = [6, 8];
const verticalStrip2 = [5, 9];
const horizontalStrip = [2, 3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempts = 1;

console.log("Завдання — вгадати координати точки, яка потрапляє у цю область.");

function askForPoint() {
  rl.question("x: ", (xInput) => {
    rl.question("y: ", (yInput) => {
      const enterPoint = [Number(xInput), Number(yInput)];

      const resultVerification1 = verticalStrip1[0] <= enterPoint[0] && enterPoint[0] <= verticalStrip1[1];
      const resultVerification2 = verticalStrip2[0] <= enterPoint[0] && enterPoint[0] <= verticalStrip2[1];
      const resultVerification3 = horizontalStrip[0] <= enterPoint[1] && enterPoint[1] <= horizontalStrip[1];

      const resultVerification = (resultVerification3 && resultVerification2) || resultVerification1;

      if (resultVerification) {
        console.log(`Ви вгадали точку за ${attempts} спроб!`);
        rl.close();
      } else if (resultVerification1 || resultVerification2 || resultVerification3) {
        console.log("Тепліше... " );
        attempts++;
        askForPoint();
      } else {
        console.log("Холодніше... " );
        attempts++;
        askForPoint();
      }
    });
  });
}

askForPoint();
