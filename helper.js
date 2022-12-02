import fs from "fs";
export const readInputFile = async (filePath) => {
    const data = await fs.promises.readFile(filePath, undefined);
    const arr = data.toString().split("\n");
    return arr;
}