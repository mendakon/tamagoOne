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

const randomEmoji = ()=>{
    const emojiCount = emojis.length
    const randIndex = Math.floor(Math.random()*emojiCount)
    return emojis[randIndex]
}

export const bosyu = ()=>
`${today}のワンドロのお題を募集します! ${randomEmoji()}
開催日時は10:00から！ ${randomEmoji()}
前回、前々回選ばれなかったお題と合わせて抽選します！ ${randomEmoji()}
期限は今日の9:30まで！ ${randomEmoji()}
↓↓お題はリプライまで！ :gomennnasai:`

export const tohyo = ()=>
`お題の投票を行います！ ${randomEmoji()} ${randomEmoji()} ${randomEmoji()}
今回のワンドロにふさわしいお題に1票をお願いします！ ${randomEmoji()}`

export const happyo = (odai)=>
`${today} 玉子丼月曜ワンドロ20分前になりました！ ${randomEmoji()}
今回のお題は「${odai}」です！ ${randomEmoji()}  ${randomEmoji()}
開始は10:00からです！  ${randomEmoji()}
制限時間は一応11:00迄ですが、過ぎても特に何もありません！  ${randomEmoji()}
投稿するときは #玉子丼月曜ワンドロ のタグをお忘れなく！ ${randomEmoji()}
(無理にとは言いませんが作品だけ未収載を外していただければタグから一覧に飛べて便利です！)`  

export const kaishi = (odai)=>
`${today} 玉子丼月曜ワンドロを開始してください！ ${randomEmoji()}
今回のお題は「${odai}」です！ ${randomEmoji()}
制限時間は一応11:00迄ですが、過ぎても特に何もありません！ ${randomEmoji()}
投稿するときは #玉子丼月曜ワンドロ のタグをお忘れなく！ ${randomEmoji()}
(無理にとは言いませんが作品だけ未収載を外していただければタグから一覧に飛べて便利です！)`
