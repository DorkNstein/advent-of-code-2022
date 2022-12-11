import { readInputFile } from "../helper.js";

const firstProblem = async () => {
  const arr = await readInputFile("./Dec7/input.txt");
  let uniqueDirs = new Map();
  uniqueDirs.set("/", {
    parent: undefined,
    size: 0
  })
  let uniqueFileNames = new Set();
  let listedParents = [];
  let currentDirName = "";
  let currentPath = "";
  for (let i = 0; i < arr.length; i++) {
    const [firstParam, secParam, thirdParam] = arr[i].split(" ");
    const dirData = uniqueDirs.get(currentDirName);
    console.log(listedParents, { currentDirName, size: dirData?.size });
    console.log(arr[i]);
    switch (firstParam) {
      case "$":
        // Unix command
        if (secParam === "cd") {
          if (thirdParam === "..") {
            listedParents.pop();
            currentDirName = listedParents[listedParents.length - 1];
          } else {
            listedParents.push(thirdParam);
            currentDirName = thirdParam;
          }
          currentPath = `${listedParents.join(">>")}`;
        }
        break;
      case "dir":
        // dir list
        const name = secParam;
        if (!uniqueDirs.has(name)) {
          uniqueDirs.set(name, {
            parent: currentDirName,
            size: 0,
          });
        }
        break;
      default:
        // file Size
        const filePath = `${currentPath}>>${secParam}`;
        if (!uniqueFileNames.has(filePath)) {
          uniqueFileNames.add(filePath);
          listedParents.forEach(dir => {
            const dirData = uniqueDirs.get(dir);
            dirData.size += +firstParam;
            uniqueDirs.set(dir, dirData);
          });
        }
        break;
    }
  }
  console.log(uniqueDirs)
  let sum = 0;
  for (var [key, value] of uniqueDirs) {
    if (value.size <= 100000) {
      sum += value.size;
    }
    console.log(key, value.size, sum);
}

  console.log(`First problem total`, sum);
};

const secondProblem = async () => {
  const arr = await readInputFile("./Dec7/input.txt");
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
// secondProblem();


// 1087193
// 1089446