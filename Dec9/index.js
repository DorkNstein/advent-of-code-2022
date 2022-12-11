import { readInputFile } from "../helper.js";

const firstProblem = async () => {
  let arr = await readInputFile("./Dec9/input.txt");
  const visited = new Set();
  const headP = { x: 0, y: 0 };
  let tailP = { x: 0, y: 0 };
  visited.add(`x${tailP.x}y${tailP.y}`);
  for (let i = 0; i < arr.length; i++) {
    const headMove = arr[i].split(" ");
    const moveDis = +headMove[1];
    for (let j = 1; j <= moveDis; j++) {
      let movement = 1;
      switch (headMove[0]) {
        case "L":
          headP.x = headP.x - 1;
          movement = -1;
          break;
        case "R":
          headP.x = headP.x + 1;
          break;
        case "U":
          headP.y = headP.y + 1;
          break;
        case "D":
          headP.y = headP.y - 1;
          movement = -1;
          break;

        default:
          break;
      }
      tailP = tailMovement(headP, tailP);

      if (!visited.has(`x${tailP.x}y${tailP.y}`)) {
        visited.add(`x${tailP.x}y${tailP.y}`);
      }
    }
  }
  const allVisited = Array.of(...visited);
  console.log(`First problem visited: ${allVisited.length}`);
};

const tailMovement = (headP, tailP) => {
  const xDiff = headP.x - tailP.x;
  const yDiff = headP.y - tailP.y;
  const besideXAxis = Math.abs(xDiff) <= 1;
  const besideYAxis = Math.abs(yDiff) <= 1;
  // console.log(headP, tailP);
  const outTail = { ...tailP };
  if (besideXAxis && besideYAxis) {
    // console.log("No change");
    // No need to move tail
  } else if (xDiff === 0) {
    outTail.y += yDiff > 0 ? 1 : -1;
    // console.log("No change in x, only y");
  } else if (yDiff === 0) {
    // console.log("No change in y, only x");
    outTail.x += xDiff > 0 ? 1 : -1;
  } else if (Math.abs(xDiff) === 1) {
    // console.log("Both change, x by 1");
    outTail.x += xDiff;
    outTail.y += yDiff > 0 ? 1 : -1;
  } else if (Math.abs(yDiff) === 1) {
    // console.log("Both change, y by 1");
    outTail.y += yDiff;
    outTail.x += xDiff > 0 ? 1 : -1;
  } else {
    outTail.y += yDiff > 0 ? 1 : -1;
    outTail.x += xDiff > 0 ? 1 : -1;
  }
  // console.log("after", outTail);
  return outTail;
};

const secondProblem = async () => {
  let arr = await readInputFile("./Dec9/input.txt");

  const visited = new Set();
  const headP = { x: 0, y: 0 };
  let tailPs = new Array(9).fill({ x: 0, y: 0 });
  visited.add(`x0y0`);
  for (let i = 0; i < arr.length; i++) {
    const headMove = arr[i].split(" ");
    const moveDis = +headMove[1];
    for (let j = 1; j <= moveDis; j++) {
      let movement = 1;
      switch (headMove[0]) {
        case "L":
          headP.x = headP.x - 1;
          movement = -1;
          break;
        case "R":
          headP.x = headP.x + 1;
          break;
        case "U":
          headP.y = headP.y + 1;
          break;
        case "D":
          headP.y = headP.y - 1;
          movement = -1;
          break;

        default:
          break;
      }

      for (let ti = 0; ti < tailPs.length; ti++) {
        const tail = tailPs[ti];
        if (ti === 0) {
          tailPs[ti] = tailMovement(headP, tail);
        } else {
          tailPs[ti] = tailMovement(tailPs[ti - 1], tail);
        }

        if (
          ti === tailPs.length - 1 &&
          !visited.has(`x${tailPs[ti].x}y${tailPs[ti].y}`)
        ) {
          visited.add(`x${tailPs[ti].x}y${tailPs[ti].y}`);
        }
      }
    }
  }
  const allVisited = Array.of(...visited);
  console.log(`Second problem visited: ${allVisited.length}`);
};

firstProblem();
secondProblem();
