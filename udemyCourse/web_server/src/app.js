const path = require('path')
const express = require('express')

const app = express()

const pagePath = path.join(__dirname,'../public')
app.set('view engine', 'hbs')
app.use(express.static(pagePath))




app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title:'about me',
        name:'sachin'
    })
})
app.get('/forecast',(req,res)=>{
    res.send({
        location:'Pune',
        temperature:40
    })
})

app.listen(8080,()=>{
    console.log("Server started!");
});
