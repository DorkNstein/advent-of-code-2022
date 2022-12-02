import { readInputFile } from "../helper.js";

const firstProblem = async () => {
    const arr = await readInputFile("./Dec1/input.txt");
    let max = 0;
    let localSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const each = arr[i];
        if (each === '') {
            if (max < localSum) {
                max = localSum;
            }
            localSum = 0;
            continue;
        } 
        localSum += +each;
    }

    console.log(max);
}

firstProblem();

const secondProblem = async () => {
    const arr = await readInputFile("./Dec1/input.txt");
    let max1 = 0, max2 = 0, max3 = 0;
    let localSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const each = arr[i];
        if (each === '') {
            if (max1 < localSum) {
                max3 = max2;
                max2 = max1;
                max1 = localSum;
            } else if (max2 < localSum) {
                max3 = max2;
                max2 = localSum;
            } else if (max3 < localSum) {
                max3 = localSum;
            }
            localSum = 0;
            continue;
        } 
        localSum += +each;
    }

    console.log(max1 + max2 + max3);
}

secondProblem();