const express = require("express")
const GiftExchangeModel = require("../models/gift-exchange")
const Errors = require("../utils/errors")
const router = express.Router()


const bodyParser = require('body-parser')
router.use(bodyParser.json())


router.post('/pairs', (req, res) => {
    const names = req.body.names

    try {
        res.status(200).send(GiftExchangeModel.pairs(names))
    }
    catch {
        return next(new Errors.BadRequestError())
    }
})

router.post('/traditional', (req, res) => {
    const names = req.body.names

    try {
        res.status(200).send(GiftExchangeModel.traditional(names))
    }
    catch {
        return next(new Errors.BadRequestError())
    }

})

// router.get()

module.exports = router
