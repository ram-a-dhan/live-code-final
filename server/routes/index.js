const route = require('express').Router()
const controllerUser = require('../controllers/user')
const controllerCountry = require('../controllers/country')
const controllerReport = require('../controllers/report')
const { authentication, authorization } = require('../middlewares/auth')

route.post('/login', controllerUser.login)
route.use(authentication)
route.get('/countries', controllerCountry.fetchCountries)
route.get('/reports', controllerReport.fetchReports)
route.post('/reports', controllerReport.postReport)
route.use(authorization)
route.delete('/reports/:id', controllerReport.eraseReport)

module.exports = route