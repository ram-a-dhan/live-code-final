const route = require('express').Router()
const controllerUser = require('../controllers/user')

route.post('/login', controllerUser.login)
// route.get('/countries',)
// route.get('/reports',)
// route.post('/reports',)
// route.delete('/reports/:id',)

module.exports = route