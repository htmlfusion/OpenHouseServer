module.exports = function(app) {

  app.get('/houses/', function(req, res) {
    res.send('Hello Houses');
  });

}