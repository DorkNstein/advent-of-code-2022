import { readInputFile } from "../helper.js";

const firstProblem = async () => {
  const arr = await readInputFile("./Dec5/input.txt");
  const stacks = [
    ["S", "T", "H", "F", "W", "R"],
    ["S", "G", "D", "Q", "W"],
    ["B", "T", "W"],
    ["D", "R", "W", "T", "N", "Q", "Z", "J"],
    ["F", "B", "H", "G", "L", "V", "T", "Z"],
    ["L", "P", "T", "C", "V", "B", "S", "G"],
    ["Z", "B", "R", "T", "W", "G", "P"],
    ["N", "G", "M", "T", "C", "J", "R"],
    ["L", "G", "B", "W"],
  ];
  
  for (let i = 0; i < arr.length; i++) {
    const moves = arr[i].split(" ");
    const [, /* move */ moveCount /* from */, , from /* to */, , to] = moves;
    const fromStack = stacks[+from - 1];
    const movingItems = stacks[+from - 1].splice(fromStack.length - +moveCount);
    // Reverse the stacks pushing
    stacks[+to - 1] = [...stacks[+to - 1], ...movingItems.reverse()];
  }

  const lastItemsInStacks = stacks
    .map((x) => x.pop())
    .join()
    .replace(/,/g, "");

  console.log(`First problem total`, lastItemsInStacks);
};

const secondProblem = async () => {
  const arr = await readInputFile("./Dec5/input.txt");
  const stacks = [
    ["S", "T", "H", "F", "W", "R"],
    ["S", "G", "D", "Q", "W"],
    ["B", "T", "W"],
    ["D", "R", "W", "T", "N", "Q", "Z", "J"],
    ["F", "B", "H", "G", "L", "V", "T", "Z"],
    ["L", "P", "T", "C", "V", "B", "S", "G"],
    ["Z", "B", "R", "T", "W", "G", "P"],
    ["N", "G", "M", "T", "C", "J", "R"],
    ["L", "G", "B", "W"],
  ];
  for (let i = 0; i < arr.length; i++) {
    const moves = arr[i].split(" ");
    const [, /* move */ moveCount /* from */, , from /* to */, , to] = moves;
    const fromStack = stacks[+from - 1];
    const movingItems = stacks[+from - 1].splice(fromStack.length - +moveCount);
    stacks[+to - 1] = [...stacks[+to - 1], ...movingItems];
  }

  const lastItemsInStacks = stacks
    .map((x) => x.pop())
    .join()
    .replace(/,/g, "");
  console.log(`Second problem total`, lastItemsInStacks);
};

firstProblem();
secondProblem();
