const { Country } = require('../models')

class controllerCountry {
    static async fetchCountries(req, res, next) {
        try {
            let found = await Country.findAll({ attributes: [
                'name',
                'cases',
                'deaths',
                'recovered',
            ] })
            res.status(200).json(found)
        } catch (err) {
            next(err)
        }


    }
}

module.exports = controllerCountry