const http = require('http')
const app = require('./app.js');


const PORT = process.env.PORT_NO ;



const server = http.createServer(app)


server.listen(PORT,() =>{
    console.log(`The server is running on port ${PORT}`)
})
