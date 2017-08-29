const PassportLocalStrategy = require('passport-local').Strategy
const encryption = require('../utilities/encryption')
const User = require('../models/User')
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const reqUser = {
    username: username.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    gender: req.body.gender.trim()
  }
  User
    .findOne({ username: reqUser.username })
    .then(userFound => {
      if (!userFound) {
        let salt = encryption.generateSalt()
        let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)
        User
          .create({
            username: reqUser.username,
            password: hashedPassword,
            salt: salt,
            name: reqUser.name,
            email: reqUser.email
          })
          .then(userCreated => {
            return done(null)
          }).catch(err => {
            console.log(err)
          })
      } else {
        return done('Username already exists!')
      }
    })
    .catch(err => {
      console.log(err)
    })
})
