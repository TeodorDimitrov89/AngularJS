const validationForms = require('./validationForms')
const User = require('mongoose').model('User')
module.exports = {
  userData: (req, res, next) => {
    console.log(req)
  },
  editUser: (req, res, next) => {
    const validationResult = validationForms.validateSignupForm(req.body)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }
    let id = req.body._id
    User
      .findByIdAndUpdate(id, {
        $set: {
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          isAdmin: req.body.isAdmin,
          isBlocked: req.body.isBlocked
        }
      })
      .then(user => {
        user.save()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Edit successful!',
              user
            })
          }).catch(err => res.status(200).json({
            success: false,
            errors: err
          }))
      }).catch(err => res.status(200).json({
        success: false,
        errors: err
      }))
  },
  findFriends: (req, res, next) => {
    const search = req.query.search
    User.find({ name: search })
      .then(users => {
        if (users.length > 0) {
          return res.status(200).json({
            success: true,
            users
          })
        }
        return res.status(200).json({
          success: false,
          message: 'No user found'
        })
      })
  }
}
