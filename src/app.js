const http = require('http');
const requestHandler = require('./routes');
const mongoClient = require('./migrations/database');
const errorMiddleware = require('./middlewares/errorMiddleware');

const server = http.createServer(requestHandler);

//process.on('uncaughtException', errorMiddleware);

mongoClient(() => {
    server.listen(3000, () => {
        console.log("connected to port 3000");
    });
});

