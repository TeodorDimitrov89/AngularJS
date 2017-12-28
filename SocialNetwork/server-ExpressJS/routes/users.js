const express = require('express')
const controllers = require('../controllers')
const authCheck = require('../middleware/auth-check')

const router = new express.Router()

router.get('/profile', controllers.users.userData)
router.get('/find', controllers.users.findFriends)

// router.post('/edit', authCheck.isAuthenticated, authCheck.isAdmin(), controllers.users.editUser)

// router.get('/:id', authCheck.isAuthenticated, authCheck.isAdmin(), controllers.users.getUser)
// router.post('/block/:id', authCheck.isAuthenticated, authCheck.isAdmin(), controllers.users.blockUnblockUser)

// app.get('*', (req, res) => {
//   console.log('here')
//   res.sendFile(`index.html`, { root: root })
// })

module.exports = router
