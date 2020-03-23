const { Report, Country } = require('../models')
const customError = require('http-errors')

class controllerReport {
    static async fetchReports(req, res, next) {
        try {
            let found = await Report.findAll({
                where: { UserId: req.userData.id },
                include: [ Country ],
                attributes: [ 'cases', 'Country.name' ]
            })
            res.status(200).json(found)
        } catch (err) {
            next(err)
        }
    }

    static async postReport(req, res, next) {
        try {
            let found = await Country.findOne({ where: { id: req.body.CountryId } })
            if (!found) throw customError(404)
            let updated = await Country.update(
                { cases: found.cases + req.body.cases },
                { where: { id: found.id } }
            )
            let posted = await Report.create({
                cases: Number(req.body.cases),
                CountryId: Number(req.body.CountryId),
                UserId: Number(req.userData.id)
            })
            let summary = await Report.findOne(
                { where: { id: posted.id } },
                { include: [ Country ] }
            )
            res.status(201).json({ report: summary, Country: found })
        } catch (err) {
            next(err)
        }
    }

    static async eraseReport(req, res, next) {
        try {
            let foundReport = await Report.findOne(
                { where: { id: req.params.id } },
                { include: [ Country ] }
            )
            
            let foundCountry = await Country.findOne({ where: { id: foundReport.CountryId } })
            if (!found) throw customError(404)
            let updated = await Country.update(
                { cases: found.cases - req.body.cases },
                { where: { id: found.id } }
            )
            let posted = await Report.create({
                cases: Number(req.body.cases),
                CountryId: Number(req.body.CountryId),
                UserId: Number(req.userData.id)
            })
            
            res.status(201).json({ report: summary, Country: found })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = controllerReport