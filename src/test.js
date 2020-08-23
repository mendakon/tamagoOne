const waitThisTime = (d,h,m)=> new Promise((resolve, reject)=>{
    const date = new Date()
    const now = ((date.getDay()*24 + date.getHours())*60 + date.getMinutes())*60 + date.getSeconds()
    const target = ((d*24+h)*60+m)*60
    const delta = (target - now)<=0?(target-now)+(7*24*60*60):(target-now)

    console.log(delta)

    setTimeout(()=>{resolve()},delta*1000)
})


;(async()=>{
    await waitThisTime(5,16,16)
})()