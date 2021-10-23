// setTimeout(()=>{
//      console.log("Print after 2 sec.");
//        return 'sachin'
// },2000)
// const names = ['sachin','Teja','Anuradha'];
// const shortName = names.filter((name)=>{
//     return name.length<=5;
// })
// console.log(shortName);

// const geoCode = ((address,callback)=>{
//     const data = {
//         latitude:0,
//         longitude:0
//     }
//     return data
// })
// const data = geoCode('india');
// console.log(data);

const geoCode = ((address,callback)=>{
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
            
        }
        callback(data)    
   }, 2000);
 })
const data = geoCode('india',(newData)=>{
    console.log(newData);
})

const add = ((n1,n2,callback)=>{
    setTimeout(() => {
        const sum = n1+n2
        callback(sum)
    }, 2000);
   
})
const sum1 = add(1,4,(sum1)=>{
    console.log(sum1);
})