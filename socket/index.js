const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

const users = []

io.on('connection', socket => {
    socket.on('userJoin', ({id,name,surname, room})=> {
        const userl = {
            id: id,
            name: name,
            surname: surname,
            room: room,
            socket: socket.id
        }
        !users.some(user => user.id === userl.id) && users.push(userl)

        
        io.emit('sendUsers', users.filter(users => users.room == userl.room))

        console.log(users)
    })
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
