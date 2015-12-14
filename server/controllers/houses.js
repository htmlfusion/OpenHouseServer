var fs = require('fs');

exports.index = function(req, res, next) {
};

exports.show = function(req, res, next) {
  var path = 'server/housesData/' + req.params.house_id + '.json';
  fs.readFile(path, function(err, data) {
    if (err) {
      res.send({houses: err})
      return console.log(err);
    }
    var obj = JSON.parse(data);
    res.send({houses: obj})

  });
};