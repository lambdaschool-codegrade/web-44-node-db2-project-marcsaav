const express = require('express')

const router = express.Router()

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware")

const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status( err.status || 500).json({ message: err.message })
})

module.exports = router
