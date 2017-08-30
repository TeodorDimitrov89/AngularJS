const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
const SCHEMA = mongoose.Schema
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required!'
let userSchema = new SCHEMA({
  username: { type: SCHEMA.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  password: { type: SCHEMA.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: SCHEMA.Types.String,
  email: { type: SCHEMA.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  name: { type: SCHEMA.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  gender: { type: SCHEMA.Types.String, default: 'unspecified' },
  profileImage: { type: SCHEMA.Types.String, default: null }
})

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User

module.exports.seedAdminUser = () => {
  User.find({}).then((users) => {
    if (users.length > 0) {
      return
    }
    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, 'Admin')
    User.create({
      username: 'Admin',
      password: hashedPass,
      salt: salt,
      email: 'admin@admin.com',
      name: 'Admin',
      gender: 'male'
    })
  })
}
