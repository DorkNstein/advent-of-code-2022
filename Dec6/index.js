import { readInputFile } from "../helper.js";

const firstProblem = async () => {
  const arr = await readInputFile("./Dec6/input.txt");
  const input = arr[0];
  let uniqueChars = [];
  let startIndex = 0;
  for (let i = 0; i < input.length; i++) {
    const each = input[i];
    if (uniqueChars.indexOf(each) >= 0) {
      // Reset list if existing char is found;
      uniqueChars = uniqueChars.splice(uniqueChars.indexOf(each) + 1);
    } 
    uniqueChars.push(each);

    if (uniqueChars.length === 4) {
      startIndex = i + 1;
      break;
    }
  }

  console.log(`First problem total: ${startIndex}`);
};

const secondProblem = async () => {
  const arr = await readInputFile("./Dec6/input.txt");
  const input = arr[0];
  let uniqueChars = [];
  let startIndex = 0;
  for (let i = 0; i < input.length; i++) {
    const each = input[i];
    if (uniqueChars.indexOf(each) >= 0) {
      // Reset list if existing char is found;
      uniqueChars = uniqueChars.splice(uniqueChars.indexOf(each) + 1);
    }
    uniqueChars.push(each);

    if (uniqueChars.length === 14) {
      startIndex = i + 1;
      break;
    }
  }

  console.log(`Second problem total: ${startIndex}`);
};

firstProblem();
secondProblem();
