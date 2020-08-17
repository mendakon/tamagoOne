"use strict"

const fs = require("fs").promises
const Mastodon = require("mastodon-api")

import * as toot from "./toot"
import * as tootContent from "./tootContent"

const baseUrl = "https://mstdn.tamag.org"

//認証ファイルの名前
const authFileName = "authedId.json"

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

/*
その時間まで待つsetTimeout使いpromise化
*/
const waitThisTime = (h,m)=> new Promise((resolve, reject)=>{
    const date = new Date()
    const now = (date.getHours()*60 + date.getMinutes())*60 + date.getMilliseconds
    const target = (h*60 + m)*60
    const delta = target - now

    setTimeout(()=>{resolve()},delta*1000)
})

(async()=>{
    const odai = "";
    /**
     * お題発表
    */
    await waitThisTime(5,40)
    const odaiTootText = tootContent.happyo(odai)
    toot.toot(M, odaiTootText)

    /**
     * 開始トゥート
    */
    await waitThisTime(22,00)
    const kaishiTootText = tootContent.kaishi(odai)
    toot.toot(M, kaishiTootText)
})()

