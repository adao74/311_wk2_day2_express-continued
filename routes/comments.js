const express = require('express')
const router = express.Router()

const controller = require('../controllers/comments.js')

router.get('/comments', controller.list)

router.get("/comments/:id", controller.show)

router.post("/comments", controller.create)

module.exports = router