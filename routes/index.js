var moviesJson  = require('../movies.json');

// Routes
exports.home = function(req, res) {
  var movies = moviesJson.movies;

  res.render('home', {
    title: "Star Wars movies",
    movies: movies});
};

exports.movieSingle = function(req, res){
  var episode_number = req.params.episode_number;
  res.send("this is the page for episode " + episode_number);
};

exports.notFound = function(req, res){
  res.send("This is not the page you are looking for.");
};
