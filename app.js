const express = require ('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const giftExchange = require('./routes/gift-exchange')
const Errors = require("./utils/errors")
const app = express()


app.use(morgan('tiny'))
app.use('/gift-exchange', giftExchange)

app.use(express.json())
app.use(bodyParser.json())


app.use((error, req, res, next) => {
    if (error.message)
        res.status(error.status).send({"status": error.status, "message": error.message})
    else
        res.status(error.status).send({"status": error.status, "message": "Something wen't wrong in the application"})
})

app.get('/', (req, res) => {
    res.status(200).send({ping: 'pong'})
})

app.use((req, res, next) => {
    return next(new Errors.NotFoundError())
})


module.exports = app
