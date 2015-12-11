var express = require('express');
module.exports = function() {
  var app = express();
  require('../server/routes/index.js')(app);
  return app;
};