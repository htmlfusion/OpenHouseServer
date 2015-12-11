var port = 3000;
var express = require('./config/express');
var app = express();

require('./server/routes')(app);

app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);