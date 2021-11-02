function fetchData(callback) {
    setTimeout(()=>{
        console.log('data is fetched!');
        callback()
    },3000)
    
}

fetchData(()=>{
    console.log('Data is updated in Db');
})