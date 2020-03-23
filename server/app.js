const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(route)
app.use(errorHandler)

app.listen(port, console.log('localhost:', port))