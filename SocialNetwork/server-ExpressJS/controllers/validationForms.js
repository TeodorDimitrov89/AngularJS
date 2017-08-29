const validator = require('validator')
module.exports.validateLoginForm = (payload) => {
  const errors = {}
  let isFormValid = true
  let message = ''
  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false
    errors.username = 'Please provide your username'
  }
  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false
    errors.password = 'Please provide your password'
  }
  if (!isFormValid) {
    message = 'Check the form for errors'
  }
  return {
    success: isFormValid,
    message,
    errors
  }
}
module.exports.validateSignupForm = (payload) => {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length < 6) {
    isFormValid = false
    errors.email = 'Username must have at least 6 characters'
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6) {
    isFormValid = false
    errors.password = 'Password must have at least 6 characters'
  }
  if (!payload || typeof payload.confirmPassword !== 'string' || payload.confirmPassword.trim().length === 0) {
    isFormValid = false
    errors.confirmPassword = 'Please provide your confirm password'
  }
  if (payload.password && payload.confirmPassword && payload.password.trim() !== payload.confirmPassword.trim()) {
    isFormValid = false
    errors.password = 'Password and Confirm Password do not match'
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false
    errors.name = 'Please provide your name'
  }
  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false
    errors.email = 'Please provide a correct email address'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}
