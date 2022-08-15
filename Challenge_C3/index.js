const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use('/js', express.static(__dirname+'/js'))
app.use('/css', express.static(__dirname+'/css'))
app.use('/assets', express.static(__dirname+'/assets'))

app.get('/', function (req, res) {
    let data = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))
    res.send(data)
})

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/game', function (req, res) {
    res.sendFile(path.join(__dirname + '/game.html'))
})

app.post('/login', jsonParser, (req, res) => {
    let data = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))
    let PASSWORD
    for ( let i = 0; i < data.length; i++){
        if ( data[i].password === req.body.password) {
            PASSWORD = true
        }
    }
    if (PASSWORD){
        res.send("Authorized")
    }else{
        res.status(401).send("Unauthorized")
    }
})

app.listen(3000)