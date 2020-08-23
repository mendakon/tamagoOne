"use strict"

const fs = require("fs").promises
const Mastodon = require("mastodon-api")
const path = require("path")

const toot = require("./toot")
const tootContent = require("./tootContent")
const wordReader = require("./wordReader")



const baseUrl = "https://mstdn.tamag.org"

//認証ファイルの名前
const authFileName = path.join("../authedId.json")

//const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek]


/*
その時間まで待つsetTimeout使いpromise化
*/
const waitThisTime = (d,h,m)=> new Promise((resolve, reject)=>{
    const date = new Date()
    const now = ((date.getDay()*24 + date.getHours())*60 + date.getMinutes())*60 + date.getSeconds()
    const target = ((d*24+h)*60+m)*60
    const delta = (target - now)<=0?(target-now)+(7*24*60*60):(target-now)

    //console.log(delta)

    setTimeout(()=>{resolve()},delta*1000)
})


;(async()=>{
    //トークンコードを読みこむ
    const input = await fs.readFile(`${authFileName}`, "utf-8")
    .catch((err)=>console.error(err))

    //アクセストークンだけ取り出す
    const accessToken = JSON.parse(input).accessToken

    //M君を作成
    const info = {
        access_token:accessToken,
        timeout_ms: 60 * 1000,
        api_url: `${baseUrl}/api/v1/`,
    }
    const M = new Mastodon(info)
    
    while(true){
        const odai = wordReader.chooseWord();
        /**
         * お題発表
        */
        await waitThisTime(0,22,0)
        const odaiTootText = tootContent.happyo(odai)
        toot.toot(M, odaiTootText)

        /**
         * 開始トゥート
        */
        await waitThisTime(1,22,0)
        const kaishiTootText = tootContent.kaishi(odai)
        toot.toot(M, kaishiTootText)

        /**
         * 終了時に謎の絵文字を連射
         */
        await waitThisTime(1,23,0)
        const owariTootText = tootContent.owari()
        toot.toot(M, owariTootText)
    }
})()

