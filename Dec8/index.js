import { readInputFile } from "../helper.js";

const firstProblem = async () => {
  const arr = await readInputFile("./Dec8/input.txt");
  const hHeight = arr[0].length;
  const vHeight = arr.length;
  let visible = 2 * (vHeight + hHeight) - 4; // boundary items count

  const upMaxs = arr[0].split("").map((x) => +x);
  const leftMaxs = arr.map((x) => +x.split("")[0]);

  for (let i = 1; i < vHeight - 1; i++) {
    const each = arr[i].split("").map((x) => +x);
    for (let j = 1; j < hHeight - 1; j++) {
      const height = each[j];
      let isVisible = false;
      if (upMaxs[j] < height) {
        upMaxs[j] = height;
        isVisible = true;
      }
      if (leftMaxs[i] < height) {
        leftMaxs[i] = height;
        isVisible = true;
      }
      if (isVisible) {
        visible += 1;
        continue;
      } else {
        const rightMax = Math.max(
          ...arr[i]
            .slice(j + 1)
            .split("")
            .map((x) => +x)
        );
        if (rightMax < height) {
          visible += 1;
          continue;
        }
        const downMax = Math.max(
          ...arr.map((x) => +x.split("")[j]).slice(i + 1)
        );
        if (downMax < height) {
          visible += 1;
        }
      }
    }
  }

  console.log(`First problem visible: ${visible}`);
};

const secondProblem = async () => {
  const arr = await readInputFile("./Dec8/input.txt");
  const hHeight = arr[0].length;
  const vHeight = arr.length;
  let maxViewingCount = 0;

  for (let i = 1; i < vHeight - 1; i++) {
    const each = arr[i].split("").map((x) => +x);
    for (let j = 1; j < hHeight - 1; j++) {
      const height = each[j];

      // Right count until same or bigger height tree is found
      const rightArr = arr[i]
        .slice(j + 1)
        .split("")
        .map((x) => +x);
      let rightCount = 0;
      for (let rInd = 0; rInd < rightArr.length; rInd++) {
        const element = rightArr[rInd];
        rightCount += 1;
        if (element >= height) {
          break;
        }
      }

      // Left count until same or bigger height tree is found
      const leftArr = arr[i]
        .slice(0, j)
        .split("")
        .map((x) => +x);
      let leftCount = 0;
      for (let rInd = leftArr.length - 1; rInd >= 0; rInd--) {
        const element = leftArr[rInd];
        leftCount += 1;
        if (element >= height) {
          break;
        }
      }

      // Down count until same or bigger height tree is found
      const downArr = arr.map((x) => +x.split("")[j]).slice(i + 1);
      let downCount = 0;
      for (let dInd = 0; dInd < downArr.length; dInd++) {
        const element = downArr[dInd];
        downCount += 1;
        if (element >= height) {
          break;
        }
      }

      // Up count until same or bigger height tree is found
      const upArr = arr.map((x) => +x.split("")[j]).slice(0, i);
      let upCount = 0;
      for (let dInd = upArr.length - 1; dInd >= 0; dInd--) {
        const element = upArr[dInd];
        upCount += 1;
        if (element >= height) {
          break;
        }
      }

      const currentMultiple = upCount * leftCount * rightCount * downCount;

      if (maxViewingCount <= currentMultiple) {
        maxViewingCount = currentMultiple;
      }
    }
  }
  console.log(`Second problem total: ${maxViewingCount}`);
};

firstProblem();
secondProblem();
