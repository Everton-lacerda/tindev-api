const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express()

const routes = require('./routes')

require ('./database/db')

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(9000)