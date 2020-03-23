function errorHandler(err, req, res, next) {
    let stat = null
    let errMsg = {}
    if (err.name == 'NotFoundError') {
        stat = 404
        errMsg.errors = 'Not Found'
        errMsg.message = 'Not Found'
    } else {
        console.log(`=====${err}=====`)
    }
    res.status(404).json(errMsg)
}
module.exports = errorHandler