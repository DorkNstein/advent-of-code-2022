import { readInputFile } from "../helper.js";

const firstProblem = async () => {
    const arr = await readInputFile("./Dec4/input.txt");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const [section1, section2] = arr[i].split(',').map(x => x.split('-'));
        const [sec1Min, sec1Max] = section1;
        const [sec2Min, sec2Max] = section2;

        const completelyWithin = (+sec1Min <= +sec2Min && +sec1Max >= +sec2Max) || (+sec2Min <= +sec1Min && +sec2Max >= +sec1Max);

        if (completelyWithin) {
            total += 1;
        }
    }
    console.log(`First problem total: ${total}`);
}

const secondProblem = async () => {
    const arr = await readInputFile("./Dec4/input.txt");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const [section1, section2] = arr[i].split(',').map(x => x.split('-'));
        const [sec1Min, sec1Max] = section1;
        const [sec2Min, sec2Max] = section2;

        const completelyWithin = (+sec1Min <= +sec2Min && +sec1Max >= +sec2Max) || (+sec2Min <= +sec1Min && +sec2Max >= +sec1Max);
        const completelyOutside = +sec1Max < +sec2Min || +sec2Max < +sec1Min;

        if (!completelyOutside) {
            total += 1;
        }
    }
    console.log(`Second problem total: ${total}`);
}

firstProblem();
secondProblem();