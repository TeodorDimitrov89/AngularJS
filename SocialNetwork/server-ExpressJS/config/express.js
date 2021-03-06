const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const cors = require('cors')
const controllers = require('../controllers')
const localSignupStrategy = controllers.auth.signupStrategy
const localLoginStrategy = controllers.auth.loginStrategy
const authRoutes = require('../routes/auth')
const usersRoutes = require('../routes/users')

module.exports = (app, settings) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors())

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/users', usersRoutes)

  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({
    secret: '$3$$I0N-PA$$W0RD',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user
    }
    next()
  })

  app.use((req, res, next) => {
    // Configure public folder
    if (req.url.startsWith('/public')) {
      req.url = req.url.replace('/public', '')
    }
    next()
  },
    express.static(path.normalize(path.join(settings.rootPath, 'public'))))
}
