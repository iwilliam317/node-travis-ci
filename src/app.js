const express = require('express')

const app = express()

const server = app.listen(3000)

app.get('/', (req, res) => {
    res.send({ message: 'Testing Travis-CI'})
})

module.exports = server