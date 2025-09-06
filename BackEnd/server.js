const http = require('http')
const app = require('./app.js');
const {initializeSocket} = require('./socket')



const PORT = process.env.PORT_NO ;



const server = http.createServer(app)
initializeSocket(server)


server.listen(PORT,() =>{
    console.log(`The server is running on port ${PORT}`)
})
