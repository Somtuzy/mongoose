const express = require('express')
const test = require('./controllers/test')
const fetch = require('./controllers/fetch')
const connect = require('./configs/db')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/test', test)
app.get('/fetch', fetch)

const port = 3000 

app.listen(port, () => {
    console.log(`connected on port ${port}`);
    connect()
})