"use strict"

import fs from "fs/promises"

export const read = async (fileName) => {
    const input = await fs.readFile(`${fileName}`, "utf-8")
    .catch((err)=>console.error(err))

    console.log(input)
}

(async()=>{
    await read("wordList.csv");
})()