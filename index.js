const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const routes = require('./routes')

app.set('views', path.join('views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join('public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes())

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Servidor rodando')
    }
})