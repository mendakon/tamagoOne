const readline = require("readline")
const reader = require("./wordReader.js");
const { exit } = require("process");

const fileName = "wordList.json"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//readlineをpromise化
const question = (query) => new Promise((resolve,reject)=>{
    rl.question(query,(text)=>{
        resolve(text);
    })
})

;(async()=>{
    let answer = ""

    let wordData = await reader.read(fileName)

    for(;;){
        answer = await question("inputWord,save(S),:cancel(C)")
        
        if(answer === "S"){
            console.log("saving...")
            await reader.write(fileName,wordData)
            console.log("save Done")
        }else if(answer === "C"){
            break
        }else{
            const isExist = wordData.reduce(((acc,cur)=>acc||(cur.word === answer)),false)
            if(isExist){
                console.log(answer+"はもうあるよ")
                continue
            }
            let word = {
                "word":answer,
                "index":wordData.length,
                "used":false
            }
            wordData.push(word)
            console.log(word)
        }
    }
    exit()
})()