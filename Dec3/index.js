import { readInputFile } from "../helper.js";

const firstProblem = async () => {
    const arr = await readInputFile("./Dec3/input.txt");
    const all_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const bag = arr[i];
        const firstBag = bag.slice(0, bag.length / 2);
        const secondBag = bag.slice(bag.length / 2);
        const firstBagSet = new Set(...firstBag.split());
        // Find second bag chars in first bag set
        for (const char of secondBag) {
            if (firstBagSet.has(char)) {
                total += all_letters.indexOf(char) + 1;
                break;
            }
        }
    }
    console.log(total);
}

const secondProblem = async () => {
    const arr = await readInputFile("./Dec3/input.txt");
    const all_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let total = 0;
    // Loop pairs of 3
    for (let i = 0; i < arr.length - 2; i += 3) {
        const bag1 = arr[i];
        const bag2 = arr[i + 1];
        const bag3 = arr[i + 2];
        const bag1Set = new Set(...bag1.split());
        const first2CommonSet = new Set();

        // Store common chars from first two bags into common set
        for (const char of bag2) {
            if (bag1Set.has(char)) {
                first2CommonSet.add(char);
            }
        }

        // Find third bag chars in common set
        for (const char of bag3) {
            if (first2CommonSet.has(char)) {
                total += all_letters.indexOf(char) + 1;
                break;
            }
        }
    }
    console.log(total);
}

firstProblem();

secondProblem();