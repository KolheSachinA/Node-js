// console.log('Starting:');
// setTimeout(() => {
//     console.warn("I will Run after 2sec.")
// }, 3000)

// console.log('Ending :');

// const wait = () => {
//     console.log('I will run after 0 Sec.');
// }

// setTimeout(wait);

const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Hello World!')
})

server.listen(8080,'localhost',(req,res)=>{
    console.log('Server is running!');
})