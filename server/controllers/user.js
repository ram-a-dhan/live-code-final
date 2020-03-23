const { User } = require('../models')
const jwt = require('jsonwebtoken')
const customError = require('http-errors')

class controllerUser {
    static async login (req, res, next) {
        let { username, password } = req.body
        try {
            let found = await User.findOne({ where: { username, password } })
            if (!found) throw customError(400)
            let token = await jwt.sign({ id: found.id, username: found.username }, process.env.JWT_SECRET)
            let answer = { token, id: found.id, username: found.username }
            res.status(200).json(answer)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = controllerUser