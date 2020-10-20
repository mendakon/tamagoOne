"use strict"


const onLoadMeaasage = (toot, M) => {
    if(toot.event === 'notification' && toot.data.type === 'follow'){
        M.post(`accounts/${ toot.data.account.id }/follow`,{},
            (err,data,res)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
        })
    }else if(toot.event === 'update' && !toot.data.reblog && toot.data.media_attachments.length>0){
        const tags = toot.data.tags
        const isonedrawtoot = tags.reduce((acc,cur)=>acc+(cur.name==="玉子丼月曜ワンドロ"?1:0),0)
        if(isonedrawtoot){
            M.post(`statuses/${toot.data.id}/reblog`,{},
                (err,data,res)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
            })
        }
    }
    console.log(toot)
}

module.exports = {
    "onLoadMeaasage":onLoadMeaasage
}