const express = require('express')
const app = express()
app.use(express.json())

const userController = require('./controllers/users')
app.use('/users', userController)

const newsController = require('./controllers/news')
app.use('/news', newsController)


module.exports = app;