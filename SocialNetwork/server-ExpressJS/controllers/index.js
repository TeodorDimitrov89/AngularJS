const usersController = require('./users-controller')
const authController = require('./auth-controller')
const commentsController = require('./comments-controller')

module.exports = {
  users: usersController,
  auth: authController,
  comments: commentsController
}
