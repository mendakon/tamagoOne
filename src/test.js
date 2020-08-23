const waitThisTime = (d,h,m)=> new Promise((resolve, reject)=>{
    const date = new Date()
    const now = ((date.getDay()*24 + date.getHours())*60 + date.getMinutes())*60 + date.getSeconds()
    const target = ((d*24+h)*60+m)*60
    const delta = (target - now)<=0?(target-now)+(7*24*60*60):(target-now)

    console.log(date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds())
    console.log(d,h,m)
    setTimeout(()=>{resolve()},delta*1000)
})


;(async()=>{
    await waitThisTime(0,14,29)
})()
