var houses = require('../housesData/allHouses');

exports.index = function (req, res, next) {
  res.send({houses:houses});
}