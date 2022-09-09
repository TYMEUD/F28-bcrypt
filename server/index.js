

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//Endpoints
const {createMessage} = require('./controller')

app.post('/api/messages', createMessage)

//start server
app.listen(4004, () => console.log('Server running on port 4004'))