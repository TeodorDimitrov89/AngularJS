const express = require('express')
const controllers = require('../controllers')

const router = new express.Router()

router.post('/signup', controllers.auth.signup)

router.post('/login', controllers.auth.login)

module.exports = router
