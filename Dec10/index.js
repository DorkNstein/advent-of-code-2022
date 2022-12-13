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

const crtDraw = (cycle, register) => {
  if ([register - 1, register, register + 1].includes(cycle)) {
    return '#';
  }
  return '-';
}
const incrementCycle = (cycle, counter) => {
  if (cycle % 40 === 0) {
    cycle = 0;
    counter += 1;
  }
  cycle += 1;
  return [cycle, counter];
}
const secondProblem = async () => {
  let arr = await readInputFile("./Dec10/input.txt");
  let register = 1;
  let cycle = -1;
  let counter = -1;
  let printed = new Array(240).fill("-");
  for (let i = 0; i < arr.length; i++) {
    [cycle, counter] = incrementCycle(cycle, counter);
    printed[counter * 40 + cycle] = crtDraw(cycle, register);
    if (arr[i] !== 'noop') {
      [cycle, counter] = incrementCycle(cycle, counter);
      printed[counter * 40 + cycle] = crtDraw(cycle, register);
      const [/** addx */, add] = arr[i].split(" ");
      register += +add;
    }
  }
  let output = [];
  const chunkSize = 40;
  for (let i = 0; i < printed.length; i += chunkSize) {
      const chunk = printed.slice(i, i + chunkSize);
      output.push(chunk);
  }
  console.log("Second Problem:");
  console.log(`${output.map(x => x.join("")).join('\n')}`);
};

firstProblem();
secondProblem();
