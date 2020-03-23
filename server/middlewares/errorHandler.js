function errorHandler(err, req, res, next) {
    let stat = null
    let errMsg = {}
    if (err.name == 'BadRequestError') {
        stat = 400
        errMsg.errors = 'Bad Request'
        errMsg.message = 'Wrong input. Please try again.'
    } else if (err.name == 'UnauthorizedError') {
        stat = 401
        errMsg.errors = 'Unauthenticated'
        errMsg.message = 'You haven\'t logged in yet. Please log in first.'
    } else if (err.name == 'SequelizeDatabaseError') {
        stat = 500
        errMsg.errors = 'Database Error'
        errMsg.message = 'Something went wrong. Please try again.'
    } else {
        console.log(`=====${err}=====`)
        res.status(500).json(err)
    }
    res.status(stat).json(errMsg)
}
module.exports = errorHandler