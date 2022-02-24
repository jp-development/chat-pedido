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

const usersConnected = []

const addUser = () => {
    
}

io.on('connection', (socket) => {
    console.log('usuario conectado')
    socket.broadcast.emit('connection', socket.id)

    socket.on('sendMessage', ({ id, sender, text }) => {
        socket.broadcast.emit('getMessage', {
            id,
            sender,
            text
        })
    })

})

server.listen(4000, () => {
    console.log('listening on *:4000');
});




