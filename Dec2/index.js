import { readInputFile } from "../helper.js";

const firstProblem = async () => {
    const arr = await readInputFile("./Dec2/input.txt");
    const myScoreMap = {
        "X": 1, // Rock
        "Y": 2, // Paper
        "Z": 3 // Scissor
    };

    const oppScoreMap = {
        "A": 1, // Rock
        "B": 2, // Paper
        "C": 3 // Scissor
    };

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const play = arr[i];
        const [oppPlay, myPlay] = play.split(" ");
        const myScore = myScoreMap[myPlay];
        const oppScore = oppScoreMap[oppPlay];

        const playScore = myScore - oppScore === 1 || myScore - oppScore === -2 ? 6 : myScore - oppScore === 0 ? 3: 0;
        total += myScore + playScore;
        // console.log({myScore, oppScore, playScore});
    }

    console.log(total);
}

const secondProblem = async () => {
    const arr = await readInputFile("./Dec2/input.txt");
    const myScoreMap = {
        "X": 1, // Rock
        "Y": 2, // Paper
        "Z": 3 // Scissor
    };

    const myLossKeys = ["Z", "X", "Y"];

    const playScoreMap = {
        "X": 0, // Loss
        "Y": 3, // Draw
        "Z": 6 // Win
    };

    const oppScoreMap = {
        "A": 1, // Rock
        "B": 2, // Paper
        "C": 3 // Scissor
    };

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const play = arr[i];
        const [oppPlay, myPlay] = play.split(" ");
        // const myScore = myScoreMap[myPlay];
        const playScore = playScoreMap[myPlay];
        const oppScore = oppScoreMap[oppPlay];

        const myScore = playScore === 6 ? (oppScore % 3) + 1 : playScore === 3 ? oppScore: myScoreMap[myLossKeys[oppScore - 1]];
        total += myScore + playScore;
        // console.log({myScore, oppScore, playScore});
    }

    console.log(total);
}

firstProblem();

secondProblem();