const validationForms = require('./validationForms')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')

module.exports = {
  signupStrategy: localSignupStrategy,

  signup: (req, res, next) => {
    const validationResult = validationForms.validateSignupForm(req.body)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    return passport.authenticate('local-signup', (err) => {
      if (err) {
        return res.status(200).json({
          success: false,
          message: err
        })
      }

      return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.'
      })
    })(req, res, next)
  },

  loginStrategy: localLoginStrategy,

  login: (req, res, next) => {
    const validationResult = validationForms.validateLoginForm(req.body)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'Incorrect Credentials Error') {
          return res.status(200).json({
            success: false,
            message: err.message
          })
        }

        return res.status(200).json({
          success: false,
          message: 'Could not process the form.'
        })
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user: userData
      })
    })(req, res, next)
  }
}
