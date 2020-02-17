var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Node.js');
}).listen(3001, "localhost");
exports.handler =  async function(event, context) {
        console.log('Server running always  at http://localhost:3001/')
        return context.logStreamName
}
