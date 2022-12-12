import { readInputFile } from "../helper.js";

const getSignalStrength = (cycle, register) => {
  const indexes = [20, 60, 100, 140, 180, 220];
  let strength = 0;
  if (indexes.indexOf(cycle) >= 0) {
    strength = cycle * register;
  }
  return strength;
}

const firstProblem = async () => {
  let arr = await readInputFile("./Dec10/input.txt");
  let register = 1;
  let signalStrength = 0;
  let cycle = 0;
  for (let i = 0; i < arr.length; i++) {
    cycle += 1;
    signalStrength += getSignalStrength(cycle, register);
    if (arr[i] !== 'noop') {
      cycle += 1;
      signalStrength += getSignalStrength(cycle, register);
      const [/** addx */, counter] = arr[i].split(" ");
      register += +counter;
    }

  }
  console.log(`First problem: ${signalStrength}`);
};

const secondProblem = async () => {
  let arr = await readInputFile("./Dec10/input.txt");

  for (let i = 0; i < arr.length; i++) {
  }
  console.log(`Second problem: ${""}`);
};

firstProblem();
// secondProblem();
