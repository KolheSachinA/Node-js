const express = require('express')
const path = require('path');
const hbs = require('hbs')

const app = express()


const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../views');

app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index', {
        title: "Wohhh",
        Name: 'Kolhe'
    })
})


app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    //res.send('About')
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})