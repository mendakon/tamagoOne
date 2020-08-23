/**
 * wordReader.js
 * jsonの中から単語を読みだす
 * 書き出し、読み出し、単語を選出
 */

"use strict"

const fs = require("fs").promises

const read = async (fileName) => {
    const input = await fs.readFile(`${fileName}`, "utf-8")
    .catch((err)=>console.error(err))

    return JSON.parse(input)
}

const write = async (fileName,data)=>{
    await fs.writeFile(fileName,JSON.stringify(data,null,"  "))
        .catch((err)=>console.log(err)) 
}

const chooseWord = async ()=>{
    const FILE_NAME = "wordList.json"

    const wordsData = await read(FILE_NAME)

    const unusedWord = wordsData.filter((word)=>!word.used)//未使用単語を抽出
    const randonNum = Math.floor(Math.random()*unusedWord.length)//ランダムな数字を生成

    const word = unusedWord[randonNum]//ワードを取り出し

    wordsData[word.index].used = true;//wordをusedに

    await write(FILE_NAME,wordsData)//書き出し

    return word.word;
}

module.exports = {
    "read":read,
    "write":write,
    "chooseWord":chooseWord
}

/*;(async ()=>{
    const word = await chooseWord();
    console.log(word)
})()*/
