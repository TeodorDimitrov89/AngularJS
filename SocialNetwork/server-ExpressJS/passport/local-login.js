const jwt = require('jsonwebtoken')
const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const encryption = require('../utilities/encryption')

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const reqUser = {
    username: username.trim(),
    password: password.trim()
  }
  User
    .findOne({ username: reqUser.username })
    .then(savedUser => {
      if (!savedUser) {
        const error = new Error('Incorrect username or password')
        error.name = 'Incorrect Credentials Error'
        return done(error)
      }
      let salt = savedUser.salt
      let hashedPass = encryption.generateHashedPassword(salt, reqUser.password)
      const isMatch = savedUser.password === hashedPass
      if (!isMatch) {
        const error = new Error('Incorrect username or password')
        error.name = 'Incorrect Credentials Error'
        return done(error)
      }
      const payload = {
        sub: savedUser._id
      }
      // create a token string
      const token = jwt.sign(payload, 's0m3 r4nd0m s3ctEt sTr1nG')
      const data = {
        username: savedUser.username,
        name: savedUser.name,
        email: savedUser.email,
        gender: savedUser.gender
      }
      return done(null, token, data)
    })
    .catch(err => {
      console.log(err)
      throw new Error('Local-login Error')
    })
})
