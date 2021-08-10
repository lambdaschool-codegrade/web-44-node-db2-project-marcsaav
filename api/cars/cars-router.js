const express = require('express')

const router = express.Router()

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware")

const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.status(200).json(cars)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        const car = await Car.create(req.body)
        res.status(200).json(car)
    } catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status( err.status || 500).json({ message: err.message })
})

module.exports = router
