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
今回のお題は「${odai}」です！ ${randomEmoji()}  ${randomEmoji()}
開始は明日、${tomorrow}の22:00からです！  ${randomEmoji()}
制限時間は一応11:00迄ですが、過ぎても特に何もありません！  ${randomEmoji()}
投稿するときは #玉子丼月曜ワンドロ のタグをお忘れなく！ ${randomEmoji()}
(無理にとは言いませんが作品だけ未収載を外していただければタグから一覧に飛べて便利です！)`  

const kaishi = (odai)=>
`${today} 玉子丼月曜ワンドロを開始してください！ ${randomEmoji()}
今回のお題は「${odai}」です！ ${randomEmoji()}
制限時間は一応11:00迄ですが、過ぎても特に何もありません！ ${randomEmoji()}
投稿するときは #玉子丼月曜ワンドロ のタグをお忘れなく！ ${randomEmoji()}
(無理にとは言いませんが作品だけ未収載を外していただければタグから一覧に飛べて便利です！)`

const owari = ()=>
`${randomEmoji()} ${randomEmoji()} ${randomEmoji()} ${randomEmoji()}`


module.exports = {
    "happyo":happyo,
    "kaishi":kaishi,
    "owari":owari
}
