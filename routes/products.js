const express = require('express')
const router = express.Router()

const controller = require('../controllers/products.js')

router.get('/products', controller.list)

router.get("/products/:id", controller.show)

router.post("/products", controller.create)

module.exports = router