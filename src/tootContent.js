"use strict"

const emojis=[
    ":junri_cry:",
    ":junri_smile:",
    ":junri_surprised:",
    ":boss:",
    ":naidesu:",
    ":nyancat_rainbow: :nyancat_body: :nyancat_face:",
    ":party_parrot:",
    ":ultrafastparrot:",
    ":thumbs_up_tsurube:",
    ":gopher:",
    ":arm_right:",
    ":aisatsu_momo:",
    ":apa_hotel_president:",
    ":doba: :gagyasya:",
    ":hamasakikun:",
    ":horryasha:",
    ":kaede_matano:",
    ":satomikun:",
    ":sayano:",
    ":sayano_konata:",
    ":sayano_smile:",
    ":seikin_is_seikin:",
    ":umeshu:",
    ":uni:",
    ":vatcha:",
    ":yaada: :wanko:",
    ":yurusite:",
    ":terios_dark_smile:",
    ":terios_serious_look:",
    ":terios_smile:",
    ":thumbs_up_tomio:",
    ":tomio_lemon:",
    ":hiroshi_crying:",
    ":hiroshi_thumbs_up:",
    ":sushi_otya:",
]

const date = new Date()
const today = `${date.getMonth()+1}月${date.getDate()}日` 
const tomorrow = `${date.getMonth()+1}月${date.getDate()+1}日` 

const randomEmoji = ()=>{
    const emojiCount = emojis.length
    const randIndex = Math.floor(Math.random()*emojiCount)
    return emojis[randIndex]
}


const happyo = (odai)=>
`${tomorrow} 玉子丼月曜ワンドロのお題を発表します！ ${randomEmoji()}
明日のお題は「${odai}」です！ ${randomEmoji()}  ${randomEmoji()}
開始は明日、${tomorrow}の22:00からです！  ${randomEmoji()}
一応、主要な時間を明日夜、(10:00-11:00)としていますが、自由な時間に書いてOKです！  ${randomEmoji()}` 


const odaiBosyu = ()=>
`今日は玉子丼月曜ワンドロの日です！${randomEmoji()}
現在玉子丼月曜ワンドロではお題の募集を行っております${randomEmoji()}
良いお題等ありましたらこちら↓↓↓に投稿をお願いします！${randomEmoji()}
https://odaibako.net/u/ORF5dk3WrqEQ4iv`

const kaishi = (odai)=>
`${today} 玉子丼月曜ワンドロを開始してください！ ${randomEmoji()}
今回のお題は「${odai}」です！ ${randomEmoji()}
制限時間は一応11:00迄ですが、過ぎても特に何もありません！ ${randomEmoji()}
投稿するときは #玉子丼月曜ワンドロ のタグをお忘れなく！ ${randomEmoji()}
(無理にとは言いませんが作品だけ未収載を外していただければタグから一覧に飛べて便利です！)`

const owari = ()=>
`ワンドロの主要時間が終了しました！${randomEmoji()}
作品が完成している人は投稿をお願いします！${randomEmoji()}`


module.exports = {
    "happyo":happyo,
    "kaishi":kaishi,
    "owari":owari,
    "odaiBosyu":odaiBosyu
}
/*
;(async ()=>{
    const h = await happyo("ナナチ")
    const k = await kaishi("バナナナチ")
    const o = await odaiBosyu();
    const ow = await owari()
    console.log(h)
    console.log("")
    console.log(o)
    console.log("")
    console.log(k)
    console.log("")
    console.log(ow)
})()
*/
