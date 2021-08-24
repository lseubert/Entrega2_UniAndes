process.on('uncaughtException', err => {
    console.log('UNHANDLED EXCEPTION! Shutting down.');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');
const http = require('http');

// ? START SERVER
const server = http.createServer(app).listen(8081);

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! Shutting down.');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
