const customError = require('http-errors')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = {
    authentication: async (req, res, next) => {
        try {
            if (!req.headers.token) throw customError(401)
            let decoded = await jwt.verify(req.headers.token, process.env.JWT_SECRET)
            req.userData = decoded
            next()
        } catch (err) {
            next(err)
        }
    },
    authorization: async (req, res, next) => {
        try {
            let { id, username } = req.userData
            let pass = await User.findOne({ where: { id, username } })
            if (!pass) throw customError(403)
            next()
        } catch (err) {
            next(err)
        }
    }
}