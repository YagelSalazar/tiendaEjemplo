const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const teamOrganizerMemberRouter = require('./routes/teamOrganizerMemberRouter')

mongoose.connect(
    'mongodb//:localhost:27017/abarrotes-yagel',
    {useNewUrlParser: true, useFindAndModify: false}
)
    .then((connection) => {
        console.log(`Connected to Mongo database "${connection.connections[0].name}"`)
    })
    .catch((error) => {
        console.error('error connecting to mongo')
        console.error
    })

const app = express()
app.use('/teamOrganizerMembers', teamOrganizerMemberRouter)
const server = http.createServer(app)

server.listen(5000, () =>{
    console.log('app running on port 5000')
})