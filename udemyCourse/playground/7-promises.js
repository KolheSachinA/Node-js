// const doWorkCallback = (callback) =>{
//     setTimeout(()=>{
//        // callback(undefined,'this is result')
//        callback('this is',undefined)
//     },3000)
// }

// doWorkCallback((error,result)=>{
//     if(error){
//         return console.log('error');
//     }
//     console.log('Success!');
// })

//Promises.

const doWorkPromises = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        //resolve([1,7,4])
        reject('error')
    },2000)
})

doWorkPromises.then((result)=>{
    console.log('sucess:',result);
}).catch((error)=>{
    console.log('Error',error);
})