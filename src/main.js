"use strict"

const fs = require("fs").promises
const Mastodon = require("mastodon-api")
const path = require("path")

const toot = require("./toot")
const tootContent = require("./tootContent")
const wordReader = require("./wordReader")
const loadContent = require("./loadContent")



const baseUrl = "https://mstdn.tamag.org"

const streamUrl = "streaming/user"

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
    console.log(target - now)
    const delta = (target - now)<=0?(target-now)+(7*24*60*60):(target-now)

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

    //ストリームを開始
    const listener = M.stream(streamUrl)
    listener.on('message', (toot)=>loadContent.onLoadMeaasage(toot,M))
    listener.on('error', (error)=>console.log(error))

    

    
    while(true){
	
        /**
         * お題発表
        */
        await waitThisTime(0,22,0)
        const odai = await wordReader.chooseWord();
        const odaiTootText = tootContent.happyo(odai)
        toot.toot(M, odaiTootText)

        /**
         * 当日トゥート
         */

        await waitThisTime(1,12,30)
        const toujituTootText = tootContent.odaiBosyu()
        toot.toot(M, toujituTootText)

        /** 
         * 一時間前トゥート
        */
        await waitThisTime(1,21,0)
        const kokuchi = tootContent.kokuchi(odai)
        toot.toot(M, kokuchi)

        /**
         * 開始トゥート
        */
        await waitThisTime(1,22,0)
        const kaishiTootText = tootContent.kaishi(odai)
        toot.toot(M, kaishiTootText)

        /**
         * 終了時
         */
        await waitThisTime(1,23,0)
        const owariTootText = tootContent.owari()
        toot.toot(M, owariTootText)
    }
})()

