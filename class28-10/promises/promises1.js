const userLeft = false
const userWatchingCat = false

function watchTutotialCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message : ':)'
        })
        }else if(userWatchingCat){
                errorCallback({
                    name:'UserWatchinCat',
                    message : 'Its more funny than you'
                })
        }
        else{
            callback('Thumps up and subscibe')
        }
    }

watchTutotialCallback((sucess)=>{
    console.log('sucess:'+sucess);
},(error)=>{
    console.log(`${error.name} and ${error.message}`);
})