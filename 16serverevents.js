import http from 'http';

// using event emiiter api
const server = http.createServer();
//emit request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);