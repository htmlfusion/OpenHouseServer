var houses = require('../controllers/houses');

module.exports = function(app) {

  app.get('/houses', houses.index);
}